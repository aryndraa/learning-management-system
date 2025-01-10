<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Teacher extends Model
{
    protected $fillable = [
      "username",
      "password"
    ];

    public function profile() : HasOne
    {
        return $this->hasOne(TeacherProfile::class);
    }

    public function subjects() : BelongsToMany
    {
        return $this->belongsToMany(Subject::class, "subject_teachers", "teacher_id", "subject_id");
    }

    public function classroom()
    {
        return $this->hasOne(Classroom::class);
    }

    public function classroomTeacher() : BelongsToMany
    {
        return $this->belongsToMany(Classroom::class, "classroom_subject_teachers", "teacher_id", "classroom_id");
    }

    public function subjectTeacher() : BelongsToMany
    {
        return $this->belongsToMany(Subject::class, "classroom_subject_teachers", "teacher_id", "subject_id");
    }

    public function materials() : HasMany
    {
        return $this->hasMany(Material::class);
    }

    public function assignments() : HasMany
    {
        return $this->hasMany(Assignment::class);
    }

}
