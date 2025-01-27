<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Assignment extends Model
{
    protected $fillable = [
        "title",
        "description",
        "type",
        "deadline"
    ];

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function classroom()
    {
        return $this->belongsTo(Classroom::class);
    }

    public function files()
    {
        return $this->hasMany(AssignmentFile::class);
    }

    public function links()
    {
        return $this->hasMany(AssignmentLink::class);
    }

    public function scopeDataOnDate(Builder $query, $date)
    {
        return $query->whereDate('created_at', $date);
    }
}
