<?php

namespace App\Http\Requests\Api\V1\Admin\StudentManagement;

use Illuminate\Foundation\Http\FormRequest;
use function Symfony\Component\String\s;

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
            'major_id' => ['required', 'integer', 'exists:majors,id'],
            'classroom_id' => ['required', 'integer', 'exists:classrooms,id'],
            'full_name' => ['required', 'string', 'max:255'],
            'name' => ['string', 'max:255'],
            'number' => ['required', 'string'],
            'nis' => ['string', 'min:1', 'unique:student_profiles,nis'],
            'nisn' => ['string', 'min:1', 'unique:student_profiles,nisn'],
            'address' => ['string', 'max:255'],
            'gender' => ['string', 'max:255'],
            'place_of_birth' => ['string', 'max:255'],
            'birthday' => ['date', 'max:255'],
            'phone' => ['string', 'max:255', 'unique:student_profiles,phone'],
            'email' => ['string', 'email', 'max:255', 'unique:student_profiles,email'],
            'religion' => ['string', 'max:255'],
        ];
    }
}
