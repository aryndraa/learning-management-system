<?php

namespace App\Http\Resources\Api\V1\Admin\StudentManagement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowStudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'profile' => [
                "full_name"   => $this->profile->full_name,
                "name"        => $this->profile->name,
                "classroom"   => $this->profile->classroom->name,
                "major"       => $this->profile->major->name,
                "number"      => $this->profile->number,
                "nis"         => $this->profile->nis,
                "nisn"        => $this->profile->nisn,
                "gender"      => $this->profile->gender,
                "place_birth" => $this->profile->place_birth,
                "birthday"    => $this->profile->birthday,
                "phone"       => $this->profile->phone,
                "email"       => $this->profile->email,
                "religion"    => $this->profile->religion,
                "avatar"      => [
                    "file_url" => $this->profile->avatar->file_url ?? null,
                ]

            ]
        ];
    }
}
