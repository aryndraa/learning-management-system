<?php

namespace App\Http\Controllers\Api\V1\Admin\Summary;

use App\Http\Controllers\Controller;
use App\Models\Assignment;
use App\Models\Classroom;
use App\Models\Material;
use App\Models\Meeting;
use App\Models\Student;
use App\Models\Teacher;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;


class SummaryController extends Controller
{
    public function todaySummary()
    {
        $today = Carbon::now();

        $data = [
            "total_meetings" => Meeting::countData($today),
            "total_materials" => Material::countData($today),
            "total_assigments" => Assignment::countData($today),
            "total_teachers"  => Teacher::countAttendance($today),
            "total_students"  => Student::countAttendance($today),
            "total_classrooms" => Classroom::countJournals($today)
        ];


        return response()->json([
            "data" => $data
        ]);
    }
}
