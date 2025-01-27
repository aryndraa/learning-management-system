<?php

namespace App\Http\Resources\Api\V1\Admin\Summary;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TodaySummaryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'total_meetings'   => $this['total_meetings'],
            'total_materials'  => $this['total_materials'],
            'total_assignments' => $this['total_assigments'],
            'total_teachers'   => $this['total_teachers'],
            'total_students'   => $this['total_students'],
            'total_classrooms' => $this['total_classrooms'],
        ];
    }
}
