<?php

use App\Http\Controllers\Api\V1\Student\Auth\AuthController;
use App\Http\Controllers\Api\V1\Student\Profile\ProfileController;
use Illuminate\Support\Facades\Route;

Route::prefix('student')
    ->name('student.')
    ->group(function () {
        Route::post('/auth/login', [AuthController::class, 'login'])->name('login');

        Route::middleware(['auth:student'])
            ->group(function () {
                Route::delete('/auth/logout', [AuthController::class, 'logout'])->name('logout');

                Route::controller(ProfileController::class)
                    ->prefix('profile')
                    ->name('profile.')
                    ->group(function () {
                        Route::get('/avatar', 'getAvatarProfile')->name('getAvatar');
                        Route::post('/avatar', 'uploadAvatar')->name('storeAvatar');
                    });
            });
    });
