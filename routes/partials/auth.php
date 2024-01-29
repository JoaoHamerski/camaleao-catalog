<?php

use Domains\User\Controllers\UserLoginController;
use Domains\User\Controllers\UserLogoutController;
use Domains\User\Controllers\UserRegisterController;

Route::middleware('guest')->name('auth.')->group(function () {
    Route::post('/entrar', UserLoginController::class)->name('login');
    Route::post('/nova-conta', UserRegisterController::class)->name('register');
});


Route::middleware('auth')->name('auth.')->group(function () {
    Route::post('/sair', UserLogoutController::class)->name('logout');
});
