<?php

use Domains\Uniform\Controllers\UniformMostLikedController;
use Domains\Uniform\Controllers\UniformShowController;
use Domains\Uniform\Controllers\UniformToggleFavoriteController;
use Domains\Uniform\Controllers\UserFavoritesController;

Route::name('uniforms.')->group(function () {
    Route::get('/uniformes/mais-curtidos', UniformMostLikedController::class)->name('most-liked');
    Route::get('/categorias/{category}/uniformes/{uniform}', UniformShowController::class)->name('show');
    Route::post('/uniformes/{uniform}/favoritar', UniformToggleFavoriteController::class)->name('toggle-favorite');
});

Route::name('favorites.')->group(function () {
    Route::get('meus-favoritos', UserFavoritesController::class)->name('index');
});
