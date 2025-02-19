<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MaterialArticle extends Model
{
    protected $fillable = [
      'content'
    ];

    public function material() : BelongsTo
    {
        return $this->belongsTo(Material::class);
    }
}
