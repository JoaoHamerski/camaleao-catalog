<?php

use Domains\User\Controllers\OAuthGoogleController;
use Domains\User\Controllers\OAuthGoogleFallbackController;
use Domains\User\Controllers\UserAccountDeleteController;
use Domains\User\Controllers\UserLoginController;
use Domains\User\Controllers\UserLogoutController;
use Domains\User\Controllers\UserMyAccountController;
use Domains\User\Controllers\UserMyAccountUpdateController;
use Domains\User\Controllers\UserRegisterController;
use Laravel\Socialite\Facades\Socialite;

Route::middleware('guest')->name('auth.')->group(function () {
    Route::post('/entrar', UserLoginController::class)->name('login');
    Route::post('/nova-conta', UserRegisterController::class)->name('register');
});

Route::middleware('auth')->name('auth.')->group(function () {
    Route::get('/minha-conta', UserMyAccountController::class)->name('my-account');
    Route::delete('/minha-conta', UserAccountDeleteController::class)->name('delete-account');
    // Route::patch('/minha-conta', UserMyAccountUpdateController::class)->name('my-account-update');
    Route::post('/sair', UserLogoutController::class)->name('logout');
});

Route::get('/auth/google', OAuthGoogleController::class)->name('oauth.google');

Route::get('/auth/google/redirect', OAuthGoogleFallbackController::class);
