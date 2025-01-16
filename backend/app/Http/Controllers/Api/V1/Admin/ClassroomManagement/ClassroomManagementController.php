<?php

namespace App\Http\Controllers\Api\V1\Admin\ClassroomManagement;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use Illuminate\Http\Request;

class ClassroomManagementController extends Controller
{
    public function index()
    {
        $classrooms = Classroom::query()->get();

        return response()->json($classrooms);
    }
}
