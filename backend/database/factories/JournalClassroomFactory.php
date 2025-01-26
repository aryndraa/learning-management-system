<?php

namespace Database\Factories;

use App\Models\Classroom;
use App\Models\Subject;
use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JournalClassroom>
 */
class JournalClassroomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'teacher_id'   => Teacher::query()->inRandomOrder()->first()->id,
            'classroom_id' => Classroom::query()->inRandomOrder()->first()->id,
            'subject_id'   => Subject::query()->inRandomOrder()->first()->id,
            'description'  => $this->faker->text()
        ];
    }
}
