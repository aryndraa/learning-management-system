<?php

namespace Database\Factories;

use App\Models\Major;
use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Classroom>
 */
class ClassroomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'       => $this->faker->numberBetween(1, 10),
            'number'     => $this->faker->randomNumber(2),
            'major_id'   => Major::query()->inRandomOrder()->first()->id,
            'teacher_id' => Teacher::query()->inRandomOrder()->first()->id,
        ];
    }
}
