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
            $table->foreignId('student_id')->constrained('students')->onDelete('cascade');
            $table->string('full_name');
            $table->string('name')->default("");
            $table->foreignId('major_id')->constrained('majors')->onDelete('cascade');
            $table->foreignId('classroom_id')->constrained('classrooms')->onDelete('cascade');
            $table->integer('number');
            $table->string('nis')->default("");
            $table->string('nisn')->default("");
            $table->string('address')->default("");
            $table->string('gender')->default("");
            $table->string('place_birth')->default("");
            $table->date('birthday')->default(null);
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
