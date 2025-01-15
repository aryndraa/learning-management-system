<?php

namespace App\Http\Controllers\Api\V1\Admin\TeacherManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\TeacherManagement\CreateTeacherProfileRequest;
use App\Http\Requests\Api\V1\Admin\TeacherManagement\CreateTeacherRequest;
use App\Http\Resources\Api\V1\Admin\TeacherManagement\ShowTeacherResource;
use App\Models\File;
use App\Models\Teacher;
use App\Models\TeacherProfile;

class TeacherManagementController extends Controller
{
    public function index()
    {
        $teachers = Teacher::query()->with(['profile'])->get();

        return response()->json($teachers);
    }

    public function show(Teacher $teacher)
    {
        $teacher->load(['profile', 'profile.avatar']);

        return ShowTeacherResource::make($teacher);
    }

    public function createTeacher(CreateTeacherRequest $request)
    {
        $teacher = Teacher::query()->create([
            "username" => $request->input('username'),
            "password" => $request->input('password'),
        ]);

        return response()->isSuccessful();
    }

    public function createTeacherProfile(CreateTeacherProfileRequest $request, Teacher $teacher)
    {
        if (TeacherProfile::query()->where('teacher_id', $teacher->id)->first()) {
            return response()->json([
                'message' => 'Teacher profile already exist'
            ]);
        }

        $teacherProfile = TeacherProfile::query()->make($request->validated());
        $teacherProfile->teacher()->associate($teacher);
        $teacherProfile->save();

        if($request->hasFile('avatar')) {
            File::uploadFile($request->file('avatar'), $teacherProfile, 'avatar', 'teacher/avatars');
        }
    }


}
