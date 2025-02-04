<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class StudyGroup extends Model
{
    protected $fillable = [
        'name',
        'description'
    ];

    public function classroom() : BelongsTo
    {
        return $this->belongsTo(Classroom::class);
    }

    public function subject() : BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    public function student() : BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    public function groupStudents() : MorphMany
    {
        return $this->morphMany(GroupStudents::class, 'group');
    }

    public function groupChats() : MorphMany
    {
        return $this->morphMany(GroupChat::class, 'group');
    }

}
