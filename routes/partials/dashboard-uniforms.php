<?php

use Domains\DashboardUniform\Controllers\UniformDeleteController;
use Domains\DashboardUniform\Controllers\UniformIndexController;
use Domains\DashboardUniform\Controllers\UniformPatchController;
use Domains\DashboardUniform\Controllers\UniformStoreController;
use Domains\Shared\Models\Permission;

Route::middleware(['auth', 'can:' . Permission::ACCESS_ADMIN_PANEL])->name('dashboard.')->group(function () {
    Route::name('uniforms.')->group(function () {
        Route::get('/painel/uniformes', UniformIndexController::class)->name('index');
        Route::post('/painel/uniformes', UniformStoreController::class)->name('store');
        Route::patch('/painel/uniformes/{uniform}', UniformPatchController::class)->name('patch');
        Route::delete('/painel/uniformes/{uniform}', UniformDeleteController::class)->name('delete');
    });
});
