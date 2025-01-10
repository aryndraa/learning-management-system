<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Classroom extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function students(): HasMany
    {
        return $this->hasMany(StudentProfile::class);
    }

    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }

    public function subjectTeachers(): BelongsToMany
    {
        return $this->belongsToMany(Teacher::class, 'classroom_subject_teachers', 'classroom_id', 'teacher_id');
    }

    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class, 'classroom_subject_teachers', 'classroom_id', 'subject_id');
    }

    public function materials(): BelongsToMany
    {
        return $this->belongsToMany(Material::class, 'classroom_materials', 'classroom_id', 'material_id');
    }

    public function assignments(): HasMany
    {
        return $this->hasMany(Assignment::class);
    }

}
