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

    public static function makeRecord($user, $type, $supported = null)
    {
        if (!$user instanceof Model) {
            throw new \InvalidArgumentException('User must be an instance of model');
        }

        $description = "";

        switch ($type) {
            case 'present':
                $description = "{$user->name} was marked as present.";
                break;

            case 'make assignment':
                $description = "{$user->name} created a new assignment" . ($supported ? " for {$supported}" : '') . ".";
                break;

            case 'make material':
                $description = "{$user->name} created new material," . ($supported ? " for {$supported}" : '') . ".";
                break;

            case 'make meeting room':
                $description = "{$user->name} created a new meeting room" . ($supported ? " for {$supported}" : '') . ".";
                break;

            case 'adding material to class':
                $description = "{$user->name} added material to sclass" . ($supported ? " {$supported}" : '') . ".";
                break;

            default:
                throw new \InvalidArgumentException("Invalid type: {$type}. Allowed types: present, make assignment, make material, make meeting room, adding material to class.");
        }

        return self::create([
            'description' => $description,
            'type'        => $type,
            'user_id'     => $user->id,
            'user_type'   => get_class($user),
        ]);
    }
}
