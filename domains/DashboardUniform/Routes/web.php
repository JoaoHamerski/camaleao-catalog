<?php

use Domains\DashboardUniform\Controllers\UniformDeleteController;
use Domains\DashboardUniform\Controllers\UniformIndexController;
use Domains\DashboardUniform\Controllers\UniformPatchController;
use Domains\DashboardUniform\Controllers\UniformStoreController;
use Domains\Common\Models\Permission;

Route::middleware(['auth', 'can:' . Permission::ACCESS_ADMIN_PANEL])
    ->name('dashboard.uniforms.')
    ->prefix('/painel')
    ->group(function () {
        Route::get('/uniformes', UniformIndexController::class)->name('index');
        Route::post('/uniformes', UniformStoreController::class)->name('store');
        Route::patch('/uniformes/{uniform}', UniformPatchController::class)->name('patch');
        Route::delete('/uniformes/{uniform}', UniformDeleteController::class)->name('delete');
    });
