<?php

use Domains\DashboardCategory\Controllers\DashboardCategoryDeleteController;
use Domains\DashboardCategory\Controllers\DashboardCategoryIndexController;
use Domains\DashboardCategory\Controllers\DashboardCategoryStoreController;
use Domains\DashboardCategory\Controllers\DashboardCategoryUpdateController;
use Domains\Common\Models\Permission;

Route::middleware(['auth', 'can:' . Permission::ACCESS_ADMIN_PANEL])
    ->name('dashboard.categories.')
    ->prefix('/painel')
    ->group(function () {
        Route::get('/categorias', DashboardCategoryIndexController::class)->name('index');
        Route::post('/categorias', DashboardCategoryStoreController::class)->name('store');
        Route::patch('/categorias/{category}', DashboardCategoryUpdateController::class)->name('patch');
        Route::delete('/categorias/{category}', DashboardCategoryDeleteController::class)->name('delete');
    });
