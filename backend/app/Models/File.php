<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
      'file_original_name',
      'file_renamed',
      'file_path',
      'file_type',
    ];

    public function related()
    {
        return $this->morphTo();
    }



}
