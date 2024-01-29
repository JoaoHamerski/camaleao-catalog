<?php

use Domains\DashboardCategory\Controllers\CategoryDeleteController;
use Domains\DashboardCategory\Controllers\CategoryIndexController;
use Domains\DashboardCategory\Controllers\CategoryStoreController;
use Domains\DashboardCategory\Controllers\CategoryUpdateController;
use Domains\Shared\Models\Permission;

Route::middleware(['auth', 'can:' . Permission::ACCESS_ADMIN_PANEL])->name('dashboard.')->group(function () {
    Route::name('categories.')->group(function () {
        Route::get('/painel/categorias', CategoryIndexController::class)->name('index');
        Route::post('/painel/categorias', CategoryStoreController::class)->name('store');
        Route::patch('/painel/categories/{category}', CategoryUpdateController::class)->name('patch');
        Route::delete('/painel/categories/{category}', CategoryDeleteController::class)->name('delete');
    });
});
