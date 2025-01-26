<?php

namespace App\Http\Controllers\Api\V1\Admin\Summary;

use App\Http\Controllers\Controller;
use App\Models\Assignment;
use App\Models\Attendance;
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
    public function todaySummary()
    {
        $today = Carbon::now();

        $totalMeetings = Meeting::query()
            ->where('created_at', $today)
            ->count();

        $totalMaterials = Material::query()
            ->where('created_at', $today)
            ->count();

        $totalAssigemnts = Assignment::query()
            ->where('created_at', $today)
            ->count();

        $teacherAttendance = Teacher::query()
            ->whereHas('attendances', function (Builder $query) use ($today) {
                $query->whereDate('created_at', $today);
            })
            ->count();

        $studentAttendance = Student::query()
            ->whereHas('attendances', function (Builder $query) use ($today) {
                $query->whereDate('created_at', $today);
            })
            ->count();

        $activeClassroom = Classroom::query()
            ->whereHas('journals', function (Builder $query) use ($today) {
                $query->whereDate('created_at', $today);
            })
            ->count();


        return response()->json([
            "data" => [
                "total_meetings" => $totalMeetings,
                "total_materials" => $totalMaterials,
                "total_assigments" => $totalAssigemnts,
                "total_teacher" => $teacherAttendance,
                "total_student" => $studentAttendance,
                "total_classrooms" => $activeClassroom
            ]
        ]);
    }
}
