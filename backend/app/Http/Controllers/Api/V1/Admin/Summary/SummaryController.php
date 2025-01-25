<?php

namespace App\Http\Controllers\Api\V1\Admin\Summary;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SummaryController extends Controller
{
    public function todaySummary()
    {
        $totalClass = Classroom::query()
            ->where('created_at', Carbon::now('Asia/Jakarta'))
            ->count();

        return response()->json([
            "data" => $totalClass
        ]);
    }
}
