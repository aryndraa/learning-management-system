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
            [
                "name" => "meetings",
                "total" => $this['total_meetings'],
            ],
            [
                "name" => "materials",
                "total" => $this['total_materials'],
            ],
            [
                "name" => "assigments",
                "total" => $this['total_assigments'],
            ],
            [
                "name" => "teachers",
                "total" => $this['total_teachers'],
            ],
            [
                "name" => "students",
                "total" => $this['total_students'],
            ],
            [
                "name" => "classrooms",
                "total" => $this['total_classrooms'],
            ],
        ];
    }
}
