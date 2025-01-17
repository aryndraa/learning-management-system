<?php

namespace App\Http\Controllers\Api\V1\Admin\MajorManagement;

use App\Http\Controllers\Controller;
use App\Models\Major;
use Illuminate\Http\Request;

class MajorManagementController extends Controller
{
    public function index()
    {
        $majors = Major::query()
            ->withCount('classrooms')
            ->withCount('students')
            ->get();

        return response()->json([$majors]);
    }

    public function store(Request $request)
    {
        $major = Major::query()->create([$request->all()]);

        return response()->json([
            "message" => "major created"
        ]);
    }

    public function update(Request $request, Major $major)
    {
        $major->update($request->all());

        return response()->json([
            "message" => "major updated"
        ]);
    }

    public function destroy(Major $major)
    {
        $major->delete();

        return response()->json([
            "message" => "major deleted"
        ]);
    }
}
