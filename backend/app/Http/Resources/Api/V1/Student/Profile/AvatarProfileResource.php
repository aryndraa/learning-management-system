<?php

namespace App\Http\Resources\Api\V1\Student\Profile;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AvatarProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
          "name"   => $this->full_name,
          "avatar" => $this->avatar->file_url
        ];
    }
}
