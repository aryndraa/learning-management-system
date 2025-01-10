<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Material extends Model
{
    protected $fillable = [
        'title',
        'type'
    ];

    public function teacher() : BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }

    public function subject() : BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }
}

