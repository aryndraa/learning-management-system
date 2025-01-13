<?php

namespace App\Http\Controllers\Api\V1\Student\Auth;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Student\Auth\LoginRequest;
use Illuminate\Http\Request;

class AuthController extends BaseController
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->only('username', 'password');

        if (!$token = auth('student')->attempt($credentials)) {
            return $this->sendError('Unauthorized', [
                'error' => 'Unauthorized'
            ], 401);
        }

        $success = $this->respondWithToken($token);

        return $this->sendResponse($success, 'Login successfully');
    }

    public function logout()
    {
        auth('student')->logout();

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
