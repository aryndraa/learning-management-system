<?php

namespace App\Http\Resources\Api\V1\Admin\ClassroomManagement;

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
          "classroom" => $this->name,
          "teacher" => [
              "name" => $this->teacher->profile->name,
              "code" => $this->teacher->profile->code,
          ]
        ];
    }
}
