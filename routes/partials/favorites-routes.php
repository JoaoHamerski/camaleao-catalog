<?php

use Domains\Favorites\Controllers\MyFavoritesController;

Route::name('favorites.')->group(function () {
    Route::get('meus-favoritos', MyFavoritesController::class)->name('index');
});
