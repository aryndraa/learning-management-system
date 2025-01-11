<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssignmentLink extends Model
{
    protected $fillable = [
        'description',
        'url'
    ];

    public function assignment() : BelongsTo
    {
        return $this->belongsTo(Assignment::class);
    }

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
