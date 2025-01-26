<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class Student extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'password',
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
        return $this->hasOne(StudentProfile::class,);
    }

    public function assignmentFiles(): HasMany
    {
        return $this->hasMany(AssignmentFile::class);
    }

    public function assignmentLinks(): HasMany
    {
        return $this->hasMany(AssignmentLink::class);
    }

    public function leaderStudyGroup(): HasMany
    {
        return $this->hasMany(StudyGroup::class);
    }

    public function groups(): HasMany
    {
        return $this->HasMany(GroupStudents::class);
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

    public function attendances(): MorphMany
    {
        return $this->morphMany(Attendance::class, 'user');
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
}
