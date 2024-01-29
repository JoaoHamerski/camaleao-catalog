<?php

use Domains\Api\Controllers\CategoriesGetController;
use Domains\Category\Controllers\CategoriesIndexController;
use Domains\Category\Controllers\CategoriesShowController;
use Domains\Shared\Models\Permission;

Route::name('categories.')->group(function () {
    Route::get('/categorias', CategoriesIndexController::class)->name('index');
    Route::get('/categorias/{category}/uniformes', CategoriesShowController::class)->name('show');
});

Route::middleware(['auth', 'can:' . Permission::ACCESS_ADMIN_PANEL])->name('api.')->group(function () {
    Route::get('/api/categorias', CategoriesGetController::class)->name('categories.get');
});
