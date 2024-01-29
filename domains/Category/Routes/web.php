<?php


use Domains\Category\Controllers\CategoryIndexController;
use Domains\Category\Controllers\CategoryShowController;

Route::name('categories.')->group(function () {
    Route::get('/categorias', CategoryIndexController::class)->name('index');
    Route::get('/categorias/{category}/uniformes', CategoryShowController::class)->name('show');
});
