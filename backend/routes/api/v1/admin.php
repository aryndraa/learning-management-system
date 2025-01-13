<?php

use App\Http\Controllers\Api\V1\Admin\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::post('auth/login', [AuthController::class, 'login']);

        Route::middleware(['auth:admin'])
            ->group(function () {
                Route::delete('logout', [AuthController::class, 'logout']);
            });
    });

