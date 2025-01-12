<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class GroupChat extends Model
{
    protected $fillable = [
        'message'
    ];

    public function sender() : MorphTo
    {
        return $this->morphTo('sender');
    }

    public function group() : MorphTo
    {
        return $this->morphTo('group');
    }
}
