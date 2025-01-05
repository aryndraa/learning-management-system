<?php

namespace App\Http\Controllers\Api\V1\Student\Profile;

use App\Http\Controllers\Controller;
use App\Models\File;
use App\Models\Student;
use App\Models\StudentProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function getAvatarProfile() {
        $student = Student::query()
            ->where('id', auth()->id())
            ->with(['profile', 'profile.avatar'])
            ->first();

        return response()->json([
            "data" => $student,
            "avatar" => $student->profile->avatar->file_url
        ]);
    }

    public function storeAvatar(Request $request) {
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
