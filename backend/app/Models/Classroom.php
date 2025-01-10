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

    public function students() : HasMany
    {
        return $this->hasMany(StudentProfile::class);
    }

    public function major() : BelongsTo
    {
        return $this->belongsTo(Major::class);
    }

    public function subjects() : BelongsToMany
    {
        return $this->belongsToMany(Subject::class, 'classroom_subjects', 'classroom_id', 'subject_id');
    }

}
