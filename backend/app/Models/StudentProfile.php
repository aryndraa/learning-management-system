<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StudentProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'name',
        'major',
        'class',
        'absent',
        'nis',
        'nisn',
        'address',
        'sex',
        'place_birth',
        'date_birth',
        'phone',
        'email',
        'religion',
    ];

    public function student() : BelongsTo
    {
        return $this->belongsTo(Student::class);
    }
}
