<?php

namespace App\Http\Controllers\Api\V1\Admin\Summary;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\Admin\Summary\TodayActivityResource;
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
use Illuminate\Http\Request;

class SummaryController extends Controller
{

    private $today;

    public function __construct()
    {
        $this->today = Carbon::now();
    }

    public function getDailySummary(Request $request)
    {

        if ($request['date']) {
            $date = $request['date'];
        } else {
            $date = $this->today;
        }

        $data = [
            "total_meetings"   => Meeting::DataOnDate($date)->count(),
            "total_materials"  => Material::DataOnDate($date)->count(),
            "total_assigments" => Assignment::DataOnDate($date)->count(),
            "total_teachers"   => Teacher::AttendanceOnDate($date)->count(),
            "total_students"   => Student::AttendanceOnDate($date)->count(),
            "total_classrooms" => Classroom::JournalsOnDate($date)->count()
        ];

        return TodaySummaryResource::make($data);
    }

    public  function getDailyActivities(Request $request)
    {
        $todayActivities = ActivityRecord::DataOnDate($request['date'] ? $request['date'] : $this->today)->get();

        $todayActivities->load(['user.profile', 'user.profile.avatar']);

        return TodayActivityResource::collection($todayActivities);
    }
}
