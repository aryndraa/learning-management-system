<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
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
}
