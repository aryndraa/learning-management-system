<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

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

    public function getFileUrlAttribute()
    {
        if ($this->file_path) {
            return asset('storage/' . $this->file_path);
        }

        return secure_asset(null);
    }

    public static function uploadFile(UploadedFile $file, Model $model, $relation, $directory)
    {
        $fileOriginName = $file->getClientOriginalName();
        $extension      = $file->getClientOriginalExtension();
        $fileRename     =  'LMS_' . time() . '.' . $extension;
        $filePath       = $file->store($directory, 'public');
        $fileType       = $file->getMimeType();

        return $model->$relation()->create([
            'file_original_name' => $fileOriginName,
            'file_renamed'      => $fileRename,
            'file_path'        => $filePath,
            'file_type'        => $fileType,
        ]);
    }

    public static function updateFile(UploadedFile $file, Model $model, $relation, $directory)
    {
        if ($model->$relation) {
            Storage::disk('public')->delete($model->$relation->file_path);
            $model->$relation->delete();
        }

        return self::uploadFile($file, $model, $relation, $directory);
    }



}
