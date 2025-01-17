<?php

namespace App\Http\Controllers\Api\V1\Admin\SubjectManagement;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectManagementController extends Controller
{
    public function index()
    {
        $subjects = Subject::query()
            ->get();

        return response()->json($subjects);
    }

    public function show(Subject $subject)
    {
        return response()->json($subject);
    }

    public function store(Request $request)
    {
        $subject = Subject::query()->create($request->all());

        return response()->json([
            "message" => "Subject created"
        ]);
    }


}
