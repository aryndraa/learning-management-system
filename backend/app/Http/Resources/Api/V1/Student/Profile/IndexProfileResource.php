<?php

namespace App\Http\Resources\Api\V1\Student\Profile;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "full_name"     => $this->full_name,
            "name"          => $this->name,
            "number"        => $this->number,
            "nis"           => $this->nis,
            "nisn"          => $this->nisn,
            "address"       => $this->address,
            "sex"           => $this->sex,
            "place_birth"   => $this->place_birth,
            "birthday"      => $this->birthday,
            "phone"         => $this->phone,
            "email"         => $this->email,
            "religion"      => $this->religion,
            "avatar"        => [
                "id"        => $this->avatar->id,
                "file_path" => $this->avatar->file_url
            ],
            "major"         => [
                "id"        => $this->major->id,
                "name"      => $this->major->name
            ],
            "classroom"     => [
                "id"        => $this->classroom->id,
                "name"      => $this->classroom->name
            ]

        ];
    }
}
