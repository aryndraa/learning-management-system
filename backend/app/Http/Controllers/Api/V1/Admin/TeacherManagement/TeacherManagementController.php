<?php

namespace App\Http\Controllers\Api\V1\Admin\TeacherManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\TeacherManagement\CreateTeacherRequest;
use App\Models\File;
use App\Models\Teacher;
use App\Models\TeacherProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TeacherManagementController extends Controller
{
    public function index()
    {
        $teachers = Teacher::query()->with(['profile'])->get();

        return response()->json($teachers);
    }

    public function show(Teacher $teacher)
    {
        $teacher->load(['profile', 'subjects', 'classroom']);

        return response()->json($teacher);
    }

    public function createTeacher(CreateTeacherRequest $request)
    {
        $teacher = Teacher::query()->create([
            "username" => $request->input('username'),
            "password" => $request->input('password'),
        ]);

        return response()->json($teacher);
    }

    public function createTeacherProfile(Request $request, Teacher $teacher)
    {
        if (TeacherProfile::query()->where('teacher_id', $teacher->id)->first()) {
            return response()->json([
                'message' => 'Teacher profile already exist'
            ]);
        }

        $teacherProfile = TeacherProfile::query()->create($request->validated());

        if($request->hasFile('avatar')) {
            File::uploadFile($request->file('avatar'), $teacherProfile, 'avatar', 'teacher/avatars');
        }
    }


}
