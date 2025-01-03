<?php

use App\Http\Controllers\Api\V1\Student\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('student')
    ->name('student.')
    ->group(function () {
        Route::post('/auth/login', [AuthController::class, 'login'])->name('login');
    });
