<?php

namespace App\Http\Controllers\Api\V1\Admin\ClassroomManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\ClassroomManagement\UpSerRequest;
use App\Models\Classroom;
use Illuminate\Http\Request;

class ClassroomManagementController extends Controller
{
    public function index()
    {
        $classrooms = Classroom::query()->get();

        return response()->json($classrooms);
    }

    public function store(UpSerRequest $request)
    {
        $classroom = Classroom::query()->make($request->validated());
        $classroom->teacher()->associate($request['teacher_id']);
        $classroom->major()->associate($request['major_id']);
        $classroom->save();

        return response()->json($classroom);
    }

    public function show(Classroom $classroom) {
        $classroom->load('teacher');

        return response()->json($classroom);
    }
}
