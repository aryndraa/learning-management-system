<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->string('full_name');
            $table->string('name');
            $table->foreignId('major_id')->constrained('majors');
            $table->string('classroom_id')->default("classrooms");
            $table->string('absent');
            $table->string('nis')->default("");
            $table->string('nisn')->default("");
            $table->string('address')->default("");
            $table->string('sex')->default("");
            $table->string('place_birth')->default("");
            $table->date('date_birth')->default("");
            $table->string('phone')->default("");
            $table->string('email')->default("");
            $table->string('religion')->default("");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_profiles');
    }
};
