<?php

namespace App\Http\Controllers\Api\V1\Admin\SubjectManagement;

use App\Http\Controllers\Controller;
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

    public function store(Request $request)
    {
        $subject = Subject::query()->create($request->all());

        return response()->json([
            "message" => "Subject created"
        ]);
    }

    public function update(Request $request, Subject $subject)
    {
        $subject->update($request->all());

        return response()->json([
            "message" => "Subject updated"
        ]);
    }

    public function addTeacher(Request $request, Subject $subject)
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
