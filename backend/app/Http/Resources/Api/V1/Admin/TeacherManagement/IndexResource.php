<?php

namespace App\Http\Resources\Api\V1\Admin\TeacherManagement;

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
            "username"  => $this->username,
            "full_name" => $this->profile->full_name ?? null,
            "avatar"    => [
                "file_url" => $this->profile->avatar->file_url ?? null,
            ]
        ];
    }
}
