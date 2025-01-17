<?php

namespace App\Http\Resources\Api\V1\Admin\SubjectManagement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class indexResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"             => $this->id,
            "name"           => $this->name,
            "code"           => $this->code,
            "total_teachers" => $this->teachers_count
        ];
    }
}
