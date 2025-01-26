<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Attendance extends Model
{
    protected $fillable = [
        'present',
        'reason'
    ];

    public function user(): MorphTo
    {
        return $this->morphTo('user');
    }
}
