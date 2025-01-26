<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subject extends Model
{
    protected $fillable = [
        'name',
        'code'
    ];

    public function teachers(): BelongsToMany
    {
        return $this->belongsToMany(Teacher::class, 'subject_teachers', 'subject_id', 'teacher_id');
    }

    public function classroomTeachers(): BelongsToMany
    {
        return $this->belongsToMany(Teacher::class, 'classroom_subject_teachers', 'subject_id', 'teacher_id');
    }

    public function classrooms(): BelongsToMany
    {
        return $this->belongsToMany(Classroom::class, 'classroom_subject_teachers', 'subject_id', 'classroom_id');
    }

    public function materials(): BelongsTo
    {
        return $this->belongsTo(Material::class);
    }

    public function assignments(): HasMany
    {
        return $this->hasMany(Assignment::class);
    }

    public function groups(): HasMany
    {
        return  $this->hasMany(SubjectGroup::class);
    }

    public function studyGroups(): HasMany
    {
        return  $this->hasMany(StudyGroup::class);
    }

    public function meetings(): HasMany
    {
        return  $this->hasMany(Meeting::class);
    }

    public function journals(): HasMany
    {
        return $this->hasMany(JournalClassroom::class);
    }
}
