<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Builder;


class Teacher extends Model
{
    protected $fillable = [
        "username",
        "password"
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    public function profile(): HasOne
    {
        return $this->hasOne(TeacherProfile::class);
    }

    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class, "subject_teachers", "teacher_id", "subject_id");
    }

    public function classroom()
    {
        return $this->hasOne(Classroom::class);
    }

    public function classroomTeacher(): BelongsToMany
    {
        return $this->belongsToMany(Classroom::class, "classroom_subject_teachers", "teacher_id", "classroom_id");
    }

    public function subjectTeacher(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class, "classroom_subject_teachers", "teacher_id", "subject_id");
    }

    public function materials(): HasMany
    {
        return $this->hasMany(Material::class);
    }

    public function assignments(): HasMany
    {
        return $this->hasMany(Assignment::class);
    }

    public function classroomGroup(): HasOne
    {
        return $this->hasOne(ClassroomGroup::class);
    }

    public function SubjectGroups(): HasMany
    {
        return $this->hasMany(SubjectGroup::class);
    }

    public function senderGroupChats(): MorphMany
    {
        return $this->morphMany(GroupChat::class, 'sender');
    }

    public function senderChat(): MorphMany
    {
        return $this->morphMany(Chat::class, 'sender');
    }

    public function receiverChat(): MorphMany
    {
        return $this->morphMany(Chat::class, 'receiver');
    }

    public function announcements(): MorphMany
    {
        return $this->morphMany(Announcement::class, 'sender');
    }

    public function meetings(): HasMany
    {
        return $this->hasMany(Meeting::class);
    }

    public function attendances(): MorphMany
    {
        return $this->morphMany(Attendance::class, 'user');
    }

    public function journals(): HasMany
    {
        return $this->hasMany(JournalClassroom::class);
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }

    public static function countAttendance($date)
    {
        $countData = self::query()
            ->whereHas('attendances', function (Builder $query) use ($date) {
                $query->whereDate('created_at', $date);
            })
            ->count();

        return $countData;
    }
}
