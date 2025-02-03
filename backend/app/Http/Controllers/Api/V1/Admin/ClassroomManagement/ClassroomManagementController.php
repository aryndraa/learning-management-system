<?php

namespace App\Http\Controllers\Api\V1\Admin\ClassroomManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\ClassroomManagement\UpSerRequest;
use App\Http\Resources\Api\V1\Admin\ClassroomManagement\IndexResource;
use App\Http\Resources\Api\V1\Admin\ClassroomManagement\ShowResource;
use App\Models\Classroom;
use App\Models\JournalClassroom;
use App\Models\Major;
use App\Models\Teacher;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class ClassroomManagementController extends Controller
{
    public function index(Request $request)
    {
        $keywords  = $request->input('keywords');
        $order     = $request->input('order_by', 'number');
        $direction = $request->input('order_direction', 'asc');
        $status    = $request->input('status', 'default');
        $today = Carbon::now()->format('Y-m-d');

        $classrooms = Classroom::query()
            ->when($keywords, function (Builder $query) use ($keywords) {
                $query->where('name', 'like', '%' . $keywords . '%')
                    ->orWhereHas('major', function (Builder $query) use ($keywords) {
                        $query->where('name', 'like', '%' . $keywords . '%');
                    });
            })
            ->with(['teacher.profile', 'teacher.profile.avatar', 'major'])
            ->when($status == "online", function (Builder $query) use ($today) {
                $query->whereHas('journals', function (Builder $query) use ($today) {
                    $query->whereDate('created_at', $today);
                });
            })
            ->when($status == "offline", function (Builder $query) use ($today) {
                $query->whereHas('journals', function (Builder $query) use ($today) {
                    $query->whereDate('created_at', '!=', $today);
                })->orWhereDoesntHave('journals', function (Builder $query) use ($today) {
                    $query->whereDate('created_at', '!=', $today);
                }) ;
            })
            ->when($order == "major", function (Builder $query) use ($direction) {
                $query->orderBy(
                    Major::select('name')->whereColumn('majors.id', 'classrooms.major_id'),
                    $direction
                );
            })
            ->when($order == "teacher", function (Builder $query) use ($direction) {
                $query->orderBy(
                    Teacher::select('name')->whereColumn('teachers.id', 'classrooms.teacher_id'),
                );
            })
            ->when($order !== "major" && $order !== "teacher", function (Builder $query) use ($order, $direction) {
                $query->orderBy($order, $direction);
            })
            ->withCount('students')
            ->paginate(10);

        return indexResource::collection($classrooms);
    }

    public function show(Classroom $classroom)
    {
        $classroom->load(['teacher.profile', 'major', 'students']);

        return [
            "classroom" => ShowResource::make($classroom),
        ];
    }

    public function store(UpSerRequest $request)
    {
        $classroom = Classroom::query()->make($request->validated());
        $classroom->teacher()->associate($request['teacher_id']);
        $classroom->major()->associate($request['major_id']);
        $classroom->save();

        return response()->json([
            "message" => "classroom added"
        ]);
    }

    public function update(UpSerRequest $request, Classroom $classroom)
    {
        $classroom->update($request->validated());
        $classroom->teacher()->associate($request['teacher_id']);
        $classroom->major()->associate($request['major_id']);
        $classroom->save();

        return response()->json([
            "message" => "classroom updated"
        ]);
    }

    public function destroy(Classroom $classroom)
    {
        $classroom->delete();

        return response()->json(['message' => 'classroom deleted']);
    }
}
