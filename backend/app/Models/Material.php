<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Material extends Model
{
    protected $fillable = [
        'title',
        'type'
    ];

    public function teacher() : BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }

    public function subject() : BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    public function classrooms() : BelongsToMany
    {
        return $this->belongsToMany(Classroom::class, 'classroom_materials', 'material_id', 'classroom_id');
    }

    public function articles() : hasMany
    {
        return $this->hasMany(MaterialArticle::class);
    }

    public function videos() : hasMany
    {
        return $this->hasMany(MaterialVideo::class);
    }

    public function files() : hasMany
    {
        return $this->hasMany(MaterialFile::class);
    }
}

