<?php

use App\Http\Controllers\Api\V1\Admin\Auth\AuthController;
use App\Http\Controllers\Api\V1\Admin\StudentManagement\StudentManagementController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::post('auth/login', [AuthController::class, 'login']);

        Route::middleware(['auth:admin'])
            ->group(function () {
                Route::delete('auth/logout', [AuthController::class, 'logout']);

                Route::controller(StudentManagementController::class)
                    ->prefix('student-management')
                    ->name('student-management.')
                    ->group(function () {
                        Route::get('/', 'index');
                        Route::get('/{student}', 'show');
                        Route::post('', 'createStudent');
                        Route::post('/{student}/profile', 'createStudentProfile');
                    });
            });
    });

