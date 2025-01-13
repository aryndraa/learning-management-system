<?php

namespace App\Http\Controllers\Api\V1\Admin\StudentManagement;

use App\Http\Controllers\Api\V1\Student\Profile\ProfileController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\StudentManagemnet\CreateStudentProfileRequest;
use App\Http\Requests\Api\V1\Admin\StudentManagemnet\CreateStudentRequest;
use App\Models\File;
use App\Models\Student;
use App\Models\StudentProfile;
use Illuminate\Http\Request;

class StudentManagementController extends Controller
{
    public function index()
    {
        $students = Student::all();

        return response()->json($students);
    }

    public function show(Student $student)
    {
        return response()->json($student);
    }

    public function createStudent(CreateStudentRequest $request)
    {
        $student = Student::query()->create($request->validated());

        return response()->json($student);
    }

    public function createStudentProfile(CreateStudentProfileRequest $request, Student $student)
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

        if($request->hasFile('avatar')) {
            File::uploadFile($request->file('avatar'), $studentProfile, 'avatar', 'avatars');
        }

        $studentProfile->save();

        return response()->json($studentProfile);
    }
}
