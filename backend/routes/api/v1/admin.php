<?php

use App\Http\Controllers\Api\V1\Admin\Auth\AuthController;
use App\Http\Controllers\Api\V1\Admin\ClassroomManagement\ClassroomManagementController;
use App\Http\Controllers\Api\V1\Admin\MajorManagement\MajorManagementController;
use App\Http\Controllers\Api\V1\Admin\StudentManagement\StudentManagementController;
use App\Http\Controllers\Api\V1\Admin\SubjectManagement\SubjectManagementController;
use App\Http\Controllers\Api\V1\Admin\Summary\SummaryController;
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
                        Route::post('', 'store')->name('store');
                        Route::post('/{student}/profile', 'storeProfile')->name('storeProfile');
                        Route::patch('/{student}/profile', 'updateProfile')->name('updateProfile');
                        Route::delete('/{student}', 'destroy')->name('destroy');
                    });

                Route::controller(TeacherManagementController::class)
                    ->prefix('teacher-management')
                    ->name('teacher-management.')
                    ->group(function () {
                        Route::get('/', 'index')->name('index');
                        Route::get('/{teacher}', 'show')->name('show');
                        Route::post('', 'store')->name('store');
                        Route::post('/{teacher}/profile', 'storeProfile')->name('storeProfile');
                        Route::post('/{teacher}/avatar', 'uploadAvatar')->name('uploadAvatar');
                        Route::patch('/{teacher}/profile', 'updateProfile')->name('updateProfile');
                        Route::delete('/{teacher}', 'destroy')->name('destroy');
                    });

                Route::controller(ClassroomManagementController::class)
                    ->prefix('classroom-management')
                    ->name('classroom-management.')
                    ->group(function () {
                        Route::get('/', 'index')->name('index');
                        Route::get('/{classroom}', 'show')->name('show');
                        Route::post('', 'store')->name('store');
                        Route::patch('/{classroom}', 'update')->name('update');
                        Route::delete('/{classroom}', 'destroy')->name('destroy');
                    });

                Route::controller(SubjectManagementController::class)
                    ->prefix('subject-management')
                    ->name('subject-management.')
                    ->group(function () {
                        Route::get('/', 'index')->name('index');
                        Route::get('/{subject}', 'show')->name('show');
                        Route::post('/', 'store')->name('store');
                        Route::patch('/{subject}', 'update')->name('update');
                        Route::post('/{subject}/teacher', 'addTeacher')->name('addTeacher');
                        Route::delete('/{subject}/teacher', 'removeTeacher')->name('removeTeacher');
                        Route::delete('/{subject}', 'destroy')->name('destroy');
                    });

                Route::controller(MajorManagementController::class)
                    ->prefix('major-management')
                    ->name('major-management.')
                    ->group(function () {
                        Route::get('/', 'index')->name('index');
                        Route::post('', 'store')->name('store');
                        Route::patch('/{major}', 'update')->name('update');
                        Route::delete('/{major}', 'destroy')->name('destroy');
                    });

                Route::controller(SummaryController::class)
                    ->prefix('summary')
                    ->name('summary.')
                    ->group(function () {
                        Route::get('/daily-summary', 'getDailySummary')->name('getDailySummary');
                        Route::get('/daily-activities', 'getDailyActivities')->name('getDailyActivities');
                    });
            });
    });
