<?php

namespace App\Http\Resources\Api\V1\Admin\Summary;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TodayActivityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"            => $this->id,
            "description"   => $this->description,
            "type"          => $this->type,
            "user"          => [
                "id"        => $this->user->id,
                "full_name" => $this->user->profile->full_name ?? null,
                "avatar"    => $this->user->profile->avatar->file_url ?? null
            ],
            "created_at"     => $this->created_at->toDateTimeString()
        ];
    }
}
