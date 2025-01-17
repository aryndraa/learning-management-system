<?php

namespace App\Http\Controllers\Api\V1\Admin\SubjectManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\SubjectManagement\AddTeacherRequest;
use App\Http\Requests\Api\V1\Admin\SubjectManagement\UpSerRequest;
use App\Http\Resources\Api\V1\Admin\SubjectManagement\indexResource;
use App\Http\Resources\Api\V1\Admin\SubjectManagement\ShowResource;
use App\Models\Classroom;
use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectManagementController extends Controller
{
    public function index()
    {
        $subjects = Subject::query()
            ->withCount('teachers')
            ->get();

        return indexResource::collection($subjects);
    }

    public function show(Subject $subject)
    {
        $subject->load('teachers.profile');

        return ShowResource::make($subject);
    }

    public function store(UpSerRequest $request)
    {
        $subject = Subject::query()->create($request->validated());

        return response()->json([
            "message" => "Subject created"
        ]);
    }

    public function update(UpSerRequest $request, Subject $subject)
    {
        $subject->update($request->validated());

        return response()->json([
            "message" => "Subject updated"
        ]);
    }

    public function addTeacher(AddTeacherRequest $request, Subject $subject)
    {
        $subject->teachers()->syncWithoutDetaching($request->teacher_id);

        return response()->json([
            "message" => "Teacher added"
        ]);
    }

    public function destroy(Subject $subject)
    {
        $subject->delete();

        return response()->json([
            "message" => "Subject deleted"
        ]);
    }
}
