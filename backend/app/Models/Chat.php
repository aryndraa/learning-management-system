<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Chat extends Model
{
    protected $fillable = [
        'message'
    ];

    public function sender() : MorphTo
    {
        return $this->morphTo('sender');
    }

    public function receiver() : MorphTo
    {
        return $this->morphTo('receiver');
    }
}
