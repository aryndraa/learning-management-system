<?php

namespace App\Http\Controllers\Api\V1\Admin\ClassroomManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\ClassroomManagement\UpSerRequest;
use App\Http\Resources\Api\V1\Admin\ClassroomManagement\IndexResource;
use App\Http\Resources\Api\V1\Admin\ClassroomManagement\ShowResource;
use App\Models\Classroom;
use Illuminate\Http\Request;

class ClassroomManagementController extends Controller
{
    public function index()
    {
        $classrooms = Classroom::query()
            ->with(['teacher.profile', 'major'])
            ->orderBy('number')
            ->get();

        return IndexResource::collection($classrooms);
    }

    public function show(Classroom $classroom) {
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
