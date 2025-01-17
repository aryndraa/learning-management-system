<?php

namespace App\Http\Resources\Api\V1\Admin\SubjectManagement;

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
            "id" => $this->id,
            "name" => $this->name,
            "code" => $this->code,
            "teachers" => $this->teachers->map(function ($teacher) {
                return [
                    "id" => $teacher->id,
                    "name" => $teacher->profile->full_name,
                    "code" => $teacher->profile->code,
                ];
            })
        ];
    }
}
