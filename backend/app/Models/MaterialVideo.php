<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MaterialVideo extends Model
{
    protected $fillable = [
        'url',
        'description'
    ];

    public function material() : BelongsTo
    {
        return $this->belongsTo(Material::class);
    }
}
