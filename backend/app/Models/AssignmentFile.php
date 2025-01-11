<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssignmentFile extends Model
{
    protected $fillable = [
        'file_name',
        'file_path',
        'file_type',
        'description',
    ];

    public function assignment() : BelongsTo
    {
        return $this->belongsTo(Assignment::class);
    }

    public function student() : BelongsTo
    {
        return $this->belongsTo(Student::class);
    }
}
