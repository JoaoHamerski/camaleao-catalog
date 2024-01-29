<?php

use Domains\Uniform\Controllers\UniformsShowController;
use Domains\Uniform\Controllers\UniformToggleFavoriteController;

Route::name('uniforms.')->group(function () {
    Route::get('/categorias/{category}/uniformes/{uniform}', UniformsShowController::class)->name('show');
    Route::post('/uniformes/{uniform}/favoritar', UniformToggleFavoriteController::class)->name('toggle-favorite');
});
