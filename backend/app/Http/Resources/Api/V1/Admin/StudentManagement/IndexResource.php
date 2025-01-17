<?php

namespace App\Http\Resources\Api\V1\Admin\StudentManagement;

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
            'id' => $this->id,
            'username' => $this->username,
            'profile' => [
                "full_name" => $this->profile->full_name ?? null,
                "classroom" => $this->profile->classroom->name ?? null,
                "major"     => $this->profile->major->name ?? null,
            ] ?? null
        ];
    }
}
