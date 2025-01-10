<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MaterialArticle extends Model
{
    protected $fillable = [
      'content'
    ];

    public function material()
    {
        return $this->belongsTo(Material::class);
    }
}
