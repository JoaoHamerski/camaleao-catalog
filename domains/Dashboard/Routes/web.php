<?php

use Domains\Dashboard\Controllers\DashboardIndexController;
use Domains\Common\Models\Permission;

Route::middleware(['auth', 'can:' . Permission::ACCESS_ADMIN_PANEL])
    ->name('dashboard.')->group(function () {
        Route::get('/painel', DashboardIndexController::class)->name('index');
    });
