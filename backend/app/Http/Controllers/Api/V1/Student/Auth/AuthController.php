<?php

namespace App\Http\Controllers\Api\V1\Student\Auth;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends BaseController
{
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return $this->sendError('Unauthorized', [
                'error' => 'Unauthorized'
            ]);
        }

        $success = $this->respondWithToken($token);

        return $this->sendResponse($success, 'Login successfully');
    }

    public function logout()
    {
        auth()->logout();

        return $this->sendResponse([], 'Logout successfully');
    }

    protected function respondWithToken($token)
    {
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
        ];
    }
}
