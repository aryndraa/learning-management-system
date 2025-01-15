<?php

namespace App\Http\Resources\Api\V1\Admin\TeacherManagement;

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
            'username' => $this->username,
            'profile' => [
                "full_name" => $this->profile->full_name,
                "name" => $this->profile->name,
                "gender" => $this->profile->gender,
                "code" => $this->profile->code,
                "phone" => $this->profile->phone,
                "email" => $this->profile->email,
                "avatar" => [
                    "file_url" => $this->profile->avatar->file_url ?? null,
                ]
            ]
        ];
    }
}
