<?php

namespace App\Http\Controllers\Api\V1\Admin\Summary;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\Admin\Summary\TodaySummaryResource;
use App\Models\ActivityRecord;
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

    private $today;

    public function __construct()
    {
        $this->today = Carbon::now();
    }

    public function todaySummary()
    {

        $data = [
            "total_meetings"   => Meeting::DataOnDate($this->today)->count(),
            "total_materials"  => Material::DataOnDate($this->today)->count(),
            "total_assigments" => Assignment::DataOnDate($this->today)->count(),
            "total_teachers"   => Teacher::AttendanceOnDate($this->today)->count(),
            "total_students"   => Student::AttendanceOnDate($this->today)->count(),
            "total_classrooms" => Classroom::JournalsOnDate($this->today)->count()
        ];

        return TodaySummaryResource::make($data);
    }

    public  function todayActivities()
    {
        $todayActivities = ActivityRecord::DataOnDate($this->today)->get();

        return response()->json($todayActivities);
    }
}
