<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class ActivityRecord extends Model
{
    protected $fillable = [
        "description",
        "type"
    ];

    public function user(): MorphTo
    {
        return $this->morphTo('user');
    }

    public static function makeRecord($user, $description, $type)
    {
        if (!$user instanceof Model) {
            throw new \InvalidArgumentException('User must be an instance of model');
        }

        return self::create([
            'description' => $description,
            'type'        => $type,
            'user_id'     => $user->id,
            'user_type'   => get_class($user),
        ]);
    }
}
