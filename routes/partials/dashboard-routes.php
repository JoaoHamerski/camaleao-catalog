<?php

use Domains\Dashboard\Controllers\DashboardHomeController;
use Domains\Shared\Models\Permission;

Route::middleware(['auth', 'can:' . Permission::ACCESS_ADMIN_PANEL])->name('dashboard.')->group(function () {
    Route::get('/painel', DashboardHomeController::class)->name('index');
});
