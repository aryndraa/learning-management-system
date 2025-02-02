<?php

namespace App\Http\Controllers\Api\V1\Admin\MajorManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Admin\MajorManagement\UpSerRequest;
use App\Http\Resources\Api\V1\Admin\Major\ShowResource;
use App\Http\Resources\Api\V1\Admin\MajorManagement\IndexResource;
use App\Models\Major;
use Illuminate\Http\Request;

class MajorManagementController extends Controller
{
    public function index(Request $request)
    {
        $keywords  = $request->input('keywords');
        $order     = $request->input('order_by', 'number');
        $direction = $request->input('order_direction', 'asc');

        $majors = Major::query()
            ->when($keywords, function ($query) use ($keywords) {
                $query->where('name', 'like', '%' . $keywords . '%');
            })
            ->withCount('classrooms')
            ->withCount('students')
            ->orderBy($order, $direction)
            ->get();

        return IndexResource::collection($majors);
    }

    public function show(Major $major)
    {
        $majorDetail = $major->newQuery()
            ->withCount('students')
            ->with([
                'classrooms'  => function ($query) {
                    $query->withCount('students');
                },
                'classrooms.teacher.profile'
            ])
            ->first();

        return ShowResource::make($majorDetail);
    }

    public function store(UpSerRequest $request)
    {
        Major::query()->create($request->validated());

        return response()->json([
            "message" => "major created"
        ]);
    }

    public function update(UpSerRequest $request, Major $major)
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
