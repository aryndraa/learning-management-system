<?php

namespace App\Http\Requests\Api\V1\Admin\TeacherManagement;

use Illuminate\Foundation\Http\FormRequest;

class UpSerProfileRequest extends FormRequest
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
            "full_name" => ['required', 'string'],
            'name'      => ['string'],
            'gender'    => ['string'],
            'code'      => ['required', 'string', 'unique:teacher_profiles,code'],
            'phone'     => ['string'],
            'email'     => ['string', 'unique:teacher_profiles,email'],
        ];
    }
}
