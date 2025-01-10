<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Subject extends Model
{
    protected $fillable = [
        'name',
        'code'
    ];

    public function teachers() : BelongsToMany
    {
        return $this->belongsToMany(Teacher::class, 'subject_teacher', 'subject_id', 'teacher_id');
    }

    public function classroomTeachers() : BelongsToMany
    {
        return $this->belongsToMany(Teacher::class, 'classroom_subject_teachers', 'subject_id', 'teacher_id');
    }

    public function classrooms() : BelongsToMany
    {
        return $this->belongsToMany(Classroom::class, 'classroom_subject_teachers', 'subject_id', 'classroom_id');
    }

}
