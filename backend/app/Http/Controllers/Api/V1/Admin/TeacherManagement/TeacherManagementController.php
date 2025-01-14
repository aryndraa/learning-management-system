<?php

namespace App\Http\Controllers\Api\V1\Admin\TeacherManagement;

use App\Http\Controllers\Controller;
use App\Models\Teacher;
use Illuminate\Http\Request;

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


}
