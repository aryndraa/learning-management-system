<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClassroomGroup extends Model
{
    protected $fillable = [
        'name',
        'description',
    ];

    public function classroom() : BelongsTo
    {
        return $this->belongsTo(Classroom::class);
    }

    public function teacher() : BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }
}
