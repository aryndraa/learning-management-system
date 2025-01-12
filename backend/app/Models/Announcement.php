<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Announcement extends Model
{
    protected $fillable = [
        'title',
        'description',
    ];

    public function sender() : MorphTo
    {
        return $this->morphTo();
    }
}
