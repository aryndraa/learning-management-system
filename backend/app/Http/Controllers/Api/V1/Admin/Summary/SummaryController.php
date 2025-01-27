<?php

namespace App\Http\Controllers\Api\V1\Admin\Summary;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\Admin\Summary\TodaySummaryResource;
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
            "total_meetings"   => Meeting::DataOnDate($today)->count(),
            "total_materials"  => Material::DataOnDate($today)->count(),
            "total_assigments" => Assignment::DataOnDate($today)->count(),
            "total_teachers"   => Teacher::AttendanceOnDate($today)->count(),
            "total_students"   => Student::AttendanceOnDate($today)->count(),
            "total_classrooms" => Classroom::JournalsOnDate($today)->count()
        ];

        return TodaySummaryResource::make($data);
    }
}
