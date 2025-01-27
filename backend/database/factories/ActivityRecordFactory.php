<?php

namespace Database\Factories;

use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ActivityRecord>
 */
class ActivityRecordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $userType = $this->faker->randomElement([Student::class, Teacher::class]);
        $userId = $userType::inRandomOrder()->first()?->id;

        return [
            "user_type" => $userType,
            "user_id" => $userId,
            "description" => $this->faker->text(),
            "type" => $this->faker->word()
        ];
    }
}
