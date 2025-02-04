<?php

namespace App\Http\Controllers\Api\V1\Student\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Student\Profile\UploadAvatarRequest;
use App\Http\Resources\Api\V1\Student\Profile\AvatarProfileResource;
use App\Http\Resources\Api\V1\Student\Profile\IndexProfileResource;
use App\Models\File;
use App\Models\Student;
use App\Models\StudentProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function index()
    {
        $student = StudentProfile::query()
            ->where('student_id', auth()->id())
            ->with(['avatar', 'major', 'classroom'])
            ->first();

        return IndexProfileResource::make($student);
    }

    public function getAvatarProfile() {
        $student = StudentProfile::query()
            ->where('student_id', auth()->id())
            ->with('avatar')
            ->first();

        return AvatarProfileResource::make($student);
    }

    public function uploadAvatar(UploadAvatarRequest $request) {
        $studentProfile = StudentProfile::query()
            ->where('student_id', auth()->id())
            ->first();

        $avatar = $request->file('avatar');

        if($studentProfile->avatar) {
            Storage::disk('public')->delete($studentProfile->avatar->file_path);
            $studentProfile->avatar()->delete();
        }

        File::uploadFile($avatar, $studentProfile, 'avatar', 'avatars');
    }


}
