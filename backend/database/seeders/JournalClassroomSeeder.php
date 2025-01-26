<?php

namespace Database\Seeders;

use App\Models\JournalClassroom;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JournalClassroomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        JournalClassroom::factory()->count(10)->create();
    }
}
