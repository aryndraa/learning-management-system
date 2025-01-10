<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MaterialFile extends Model
{
    protected $fillable = [
        "description",
        "file_name",
        "file_path",
        "file_type",
    ];

    public function material() : BelongsTo
    {
        return $this->belongsTo(Material::class);
    }
}
