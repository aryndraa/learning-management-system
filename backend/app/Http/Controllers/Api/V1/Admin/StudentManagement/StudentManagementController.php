<?php

namespace App\Http\Controllers\Api\V1\Admin\StudentManagement;

use App\Http\Controllers\Api\V1\Student\Profile\ProfileController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\StudentManagement\UpSerProfileRequest;
use App\Http\Requests\Api\V1\Admin\StudentManagement\StoreRequest;
use App\Http\Resources\Api\V1\Admin\StudentManagement\IndexResource;
use App\Http\Resources\Api\V1\Admin\StudentManagement\ShowResource;
use App\Models\File;
use App\Models\Student;
use App\Models\StudentProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class StudentManagementController extends Controller
{
    public function index()
    {
        $students = Student::query()->with('profile')->get();

        return IndexResource::collection($students);
    }

    public function show(Student $student)
    {
        $student->load(['profile', 'profile.avatar', 'profile.classroom', 'profile.major']);

        return ShowResource::make($student);
    }

    public function store(StoreRequest $request)
    {
        $student = Student::query()->create($request->validated());

        return response()->json([
            "message" => "Student created"
        ]);
    }

    public function storeProfile(UpSerProfileRequest $request, Student $student)
    {

        if (StudentProfile::query()->where('student_id', $student->id)->first()) {
            return response()->json([
                'message' => 'Student profile already exist'
            ]);
        }

        $studentProfile = StudentProfile::query()->make($request->validated());

        $studentProfile->student()->associate($student);
        $studentProfile->classroom()->associate($request['classroom_id']);
        $studentProfile->major()->associate($request['major_id']);

        if ($request->hasFile('avatar')) {
            File::uploadFile($request->file('avatar'), $studentProfile, 'avatar', 'student/avatars');
        }

        $studentProfile->save();

        return response()->json([
            'message' => 'Student profile has been created'
        ]);
    }

    public function updateProfile(UpSerProfileRequest $request, Student $student)
    {
        $studentProfile = StudentProfile::query()
            ->where('student_id', $student->id)
            ->first();

        $studentProfile->update($request->validated());
        $studentProfile->student()->associate($student);
        $studentProfile->classroom()->associate($request['classroom_id']);
        $studentProfile->major()->associate($request['major_id']);


        if ($request->hasFile('avatar')) {
            if ($studentProfile->avatar) {
                Storage::disk('public')->delete($studentProfile->avatar->file_path);
                $studentProfile->avatar()->delete();
            }

            File::uploadFile($request->file('avatar'), $studentProfile, 'avatar', 'student/avatars');
        }

        $studentProfile->save();

        return response()->json([
            'message' => 'Student profile updated successfully'
        ]);
    }
}
