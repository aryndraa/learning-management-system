<?php

namespace Database\Factories;

use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Attendance>
 */
class AttendanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $randomUser   = $this->faker->randomElement([Student::class, Teacher::class]);
        $randomUserId = $randomUser::inRandomOrder()->first()?->id;


        return [
            "user_type" => $randomUser,
            "user_id"   => $randomUserId,
            "present"   => $this->faker->boolean(),
            "reason"    => $this->faker->text()
        ];
    }
}
