<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Meeting extends Model
{
    protected $fillable = [
      'description',
      'status',
      'start_at',
      'end_at',
    ];

    public function subject() : BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    public function classroom() : BelongsTo
    {
        return $this->belongsTo(Classroom::class);
    }

    public function teacher() : BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }
}
