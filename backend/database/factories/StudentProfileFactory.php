<?php

namespace Database\Factories;

use App\Models\Classroom;
use App\Models\Major;
use App\Models\Student;
use App\Models\StudentProfile;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StudentProfile>
 */
class StudentProfileFactory extends Factory
{


    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $usedStudentIds  = StudentProfile::query()->pluck('student_id')->toArray();
        $availableStudent = Student::query()
            ->whereNotIn('id', $usedStudentIds)
            ->inRandomOrder()
            ->first();

        return [
            'student_id'   => $availableStudent ? $availableStudent->id : null,
            'full_name'    => $this->faker->name(),
            'name'         =>  function (array $attributes) {
                return strtoupper($attributes['full_name']);
            } ,
            'major_id'     => Major::query()->inRandomOrder()->first()->id,
            'classroom_id' => Classroom::query()->inRandomOrder()->first()->id,
            'number'       => $this->faker->numberBetween(1,36),
            'nis'          => $this->faker->randomNumber(4, true),
            'nisn'         => $this->faker->randomNumber(8, true),
            'address'      => $this->faker->address(),
            'sex'          => $this->faker->randomElement(['male', 'female']),
            'place_birth'  => $this->faker->address(),
            'birthday'     => $this->faker->date(),
            'phone'        => $this->faker->phoneNumber(),
            'email'        => $this->faker->unique()->safeEmail(),
            'religion'     => $this->faker->randomElement(['hindu', 'islam', 'kristen', 'buddha']),
        ];
    }
}
