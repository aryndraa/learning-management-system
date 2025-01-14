<?php

use App\Http\Controllers\Api\V1\Admin\Auth\AuthController;
use App\Http\Controllers\Api\V1\Admin\StudentManagement\StudentManagementController;
use App\Http\Controllers\Api\V1\Admin\TeacherManagement\TeacherManagementController;
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
                        Route::get('/', 'index')->name('index');
                        Route::get('/{student}', 'show')->name('show');
                        Route::post('', 'createStudent')->name('createStudent');
                        Route::post('/{student}/profile', 'createStudentProfile')->name('createStudentProfile');
                    });

                Route::controller(TeacherManagementController::class)
                    ->prefix('teacher-management')
                    ->name('teacher-management.')
                    ->group(function () {
                        Route::get('/', 'index')->name('index');
                        Route::get('/{teacher}', 'show')->name('show');
                        Route::post('', 'createTeacher')->name('createTeacher');
                        Route::post('/{teacher}/profile', 'createTeacherProfile')->name('createTeacherProfile');
                    });
            });
    });

