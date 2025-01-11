<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AssignmentLink extends Model
{
    protected $fillable = [
        'description',
        'url'
    ];

    public function assignment()
    {
        return $this->belongsTo(Assignment::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
