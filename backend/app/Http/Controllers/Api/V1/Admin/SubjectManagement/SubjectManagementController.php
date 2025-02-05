<?php

namespace App\Http\Controllers\Api\V1\Admin\SubjectManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\SubjectManagement\TeacherRequest;
use App\Http\Requests\Api\V1\Admin\SubjectManagement\UpSerRequest;
use App\Http\Resources\Api\V1\Admin\SubjectManagement\IndexResource;
use App\Http\Resources\Api\V1\Admin\SubjectManagement\ShowResource;
use App\Models\Subject;
use Illuminate\Http\Resources\Json\JsonResource;

class SubjectManagementController extends Controller
{
    public function index(): JsonResource
    {
        $subjects = Subject::query()
            ->withCount('teachers')
            ->get();

        return IndexResource::collection($subjects);
    }

    public function show(Subject $subject): JsonResource
    {
        $subject->load('teachers.profile');

        return ShowResource::make($subject);
    }

    public function store(UpSerRequest $request): string
    {
        Subject::query()->create($request->validated());

        return response()->json([
            "message" => "Subject created"
        ]);
    }

    public function update(UpSerRequest $request, Subject $subject): string
    {
        $subject->update($request->validated());

        return response()->json([
            "message" => "Subject updated"
        ]);
    }

    public function addTeacher(TeacherRequest $request, Subject $subject): string
    {
        $subject->teachers()->syncWithoutDetaching($request->teacher_id);

        return response()->json([
            "message" => "Teacher added"
        ]);
    }

    public function removeTeacher(TeacherRequest $request, Subject $subject): string
    {
        $teacherId = $request->teacher_id;

        if (!$subject->teachers()->find($teacherId)) {
            return response()->json([
                "message" => "Teacher not found on Subject"
            ]);
        }

        $subject->teachers()->detach($teacherId);

        return response()->json([
            "message" => "Teacher removed"
        ]);
    }

    public function destroy(Subject $subject): string
    {
        $subject->delete();

        return response()->json([
            "message" => "Subject deleted"
        ]);
    }
}
