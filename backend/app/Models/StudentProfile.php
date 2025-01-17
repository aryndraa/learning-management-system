<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class StudentProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'name',
        'number',
        'nis',
        'nisn',
        'address',
        'gender',
        'place_birth',
        'birthday',
        'phone',
        'email',
        'religion',
    ];

    public function student() : BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    public function classroom()
    {
        return $this->belongsTo(Classroom::class);
    }

    public function major()
    {
        return $this->belongsTo(Major::class);
    }

    public function avatar()
    {
        return $this->morphOne(File::class, 'related');
    }

}
