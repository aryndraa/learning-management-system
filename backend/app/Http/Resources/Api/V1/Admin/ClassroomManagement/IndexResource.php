<?php

namespace App\Http\Resources\Api\V1\Admin\ClassroomManagement;

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
            "id" => $this->id,
            "classroom"      => $this->name,
            "major"          => $this->major->name,
            "number"         => $this->number != 0 ? $this->number : 0,
            "students_count" => $this->students_count,
            "teacher"        => [
                "full_name"  => $this->teacher->profile->full_name,
                "name"       => $this->teacher->profile->name,
                "code"       => $this->teacher->profile->code,
                "avatar"     => [
                    "file_url" => $this->teacher->profile->avatar->file_url ?? null
                ]
            ],
        ];
    }
}
