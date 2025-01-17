<?php

namespace App\Http\Resources\Api\V1\Admin\MajorManagement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"               => $this->id,
            "name"             => $this->name,
            "total_classrooms" => $this->classrooms_count,
            "total_students"   => $this->students_count
        ];
    }
}
