<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TeacherProfile extends Model
{
    protected $fillable = [
      "full_name",
      "name",
      "sex",
      "code",
      "phone",
      "email"
    ];


    public function teacher() : BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }
}
