<?php

namespace Database\Seeders;

use App\Models\ActivityRecord;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ActivityRecordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ActivityRecord::factory()->count(10)->create();
    }
}
