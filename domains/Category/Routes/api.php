<?php

use Domains\Category\Controllers\CategoriesGetController;
use Domains\Common\Models\Permission;

Route::middleware(['auth', 'can:' . Permission::ACCESS_ADMIN_PANEL])->name('api.')->group(function () {
    Route::get('/categorias', CategoriesGetController::class)->name('categories.get');
});
