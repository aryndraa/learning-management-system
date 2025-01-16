<?php

namespace App\Http\Requests\Api\V1\Admin\ClassroomManagement;

use Illuminate\Foundation\Http\FormRequest;

class UpSerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name"       => ['required', 'string'],
            "major_id"   => ['required', 'integer', 'exists:majors,id'],
            "teacher_id" => ['required', 'integer', 'exists:teachers,id'],
        ];
    }
}
