<?php

namespace App\Http\Resources\Api\V1\Admin\Major;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"             => $this->id,
            "name"           => $this->name,
            "students_count" => $this->students_count,
            "classrooms"     => $this->classrooms->map(function ($classroom) {
                return [
                    "id"             => $classroom->id,
                    "name"           => $classroom->name,
                    "number"         => $classroom->number,
                    "students_count" => $classroom->students_count,
                    "teacher"        => $classroom->teacher->profile->full_name,
                ];
            })
        ];
    }
}
