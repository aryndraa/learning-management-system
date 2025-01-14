<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class TeacherProfile extends Model
{
    protected $fillable = [
      "full_name",
      "name",
      "gender",
      "code",
      "phone",
      "email"
    ];


    public function teacher() : BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }

    public function avatar() : MorphOne
    {
        return $this->morphOne(File::class, 'related');
    }

}
