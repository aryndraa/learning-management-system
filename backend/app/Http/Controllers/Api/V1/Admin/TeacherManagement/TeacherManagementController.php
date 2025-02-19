<?php

namespace App\Http\Controllers\Api\V1\Admin\TeacherManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\TeacherManagement\StoreProfileRequest;
use App\Http\Requests\Api\V1\Admin\TeacherManagement\StoreRequest;
use App\Http\Requests\Api\V1\Admin\TeacherManagement\UpdateProfileRequest;
use App\Http\Requests\Api\V1\Admin\TeacherManagement\UploadAvatarRequest;
use App\Http\Resources\Api\V1\Admin\TeacherManagement\IndexResource;
use App\Http\Resources\Api\V1\Admin\TeacherManagement\ShowResource;
use App\Models\File;
use App\Models\Teacher;
use App\Models\TeacherProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TeacherManagementController extends Controller
{
    public function index()
    {
        $teachers = Teacher::query()->with(['profile', 'profile.avatar'])->get();

        return IndexResource::collection($teachers);
    }

    public function show(Teacher $teacher)
    {
        $teacher->load(['profile', 'profile.avatar']);

        return ShowResource::make($teacher);
    }

    public function store(StoreRequest $request)
    {
        $teacher = Teacher::query()->create([
            "username" => $request->input('username'),
            "password" => $request->input('password'),
        ]);

        return response()->json([
            "message" => "Teacher created"
        ]);
    }

    public function storeProfile(StoreProfileRequest $request, Teacher $teacher)
    {
        if (TeacherProfile::query()->where('teacher_id', $teacher->id)->first()) {
            return response()->json([
                'message' => 'Teacher profile already exist'
            ]);
        }

        $teacherProfile = TeacherProfile::query()->make($request->validated());
        $teacherProfile->teacher()->associate($teacher);
        $teacherProfile->save();

        if ($request->hasFile('avatar')) {
            File::uploadFile($request->file('avatar'), $teacherProfile, 'avatar', 'teacher/avatars');
        }

        return response()->json([
            "message" => "Teacher profile created"
        ]);
    }

    public function updateProfile(UpdateProfileRequest $request, Teacher $teacher)
    {
        $teacherProfile = TeacherProfile::query()
            ->where('teacher_id', $teacher->id)
            ->first();

        $teacherProfile->update($request->validated());
        $teacherProfile->teacher()->associate($teacher);
        $teacherProfile->save();

        return response()->json([
            "message" => "Teacher profile updated"
        ]);
    }

    public function uploadAvatar(UploadAvatarRequest $request, Teacher $teacher)
    {
        $teacherProfile = TeacherProfile::query()
            ->where('teacher_id', $teacher->id)
            ->first();

        if ($request->hasFile('avatar')) {
            File::updateFile($request->file('avatar'), $teacherProfile, 'avatar', 'teacher/avatars');
        }

        return response()->json([
            "message" => "Teacher profile updated"
        ]);
    }

    public function destroy(Teacher $teacher)
    {
        $teacherProfile = TeacherProfile::query()
            ->where('teacher_id', $teacher->id)
            ->first();

        $teacherProfile->delete();
        $teacher->delete();

        return response()->json([
            "message" => "Teacher profile deleted"
        ]);
    }
}
