<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AssignmentFile extends Model
{
    protected $fillable = [
        'file_name',
        'file_path',
        'file_type',
        'description',
    ];

    public function assignment()
    {
        return $this->belongsTo(Assignment::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
