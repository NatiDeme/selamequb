<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

Route::group([


    'prefix' => 'auth',
    'namespace' => 'App\Http\Controllers',

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    // Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');

});

Route::get('/users', [UserController::class,'get'])->name('users');
