<?php

use Domains\Api\Controllers\CategoriesGetController;
use Domains\Category\Controllers\CategoriesIndexController;
use Domains\Dashboard\Controllers\DashboardHomeController;
use Domains\DashboardCategory\Controllers\CategoryIndexController;
use Domains\DashboardCategory\Controllers\CategoryStoreController;
use Domains\DashboardCategory\Controllers\CategoryUpdateController;
use Domains\DashboardUniform\Controllers\UniformIndexController;
use Domains\DashboardUniform\Controllers\UniformPatchController;
use Domains\DashboardUniform\Controllers\UniformStoreController;
use Domains\Shared\Models\Permission;
use Domains\User\Controllers\UserLoginController;
use Domains\User\Controllers\UserLogoutController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home/TheHome');
})->name('home');

Route::middleware('guest')->name('auth.')->group(function () {
    Route::post('/entrar', UserLoginController::class)->name('login');
});

Route::middleware('auth')->name('auth.')->group(function () {
    Route::post('/sair', UserLogoutController::class)->name('logout');
});

Route::middleware(['auth', 'can:' . Permission::ACCESS_ADMIN_PANEL])->name('dashboard.')->group(function () {
    Route::get('/painel', DashboardHomeController::class)->name('index');

    Route::name('categories.')->group(function () {
        Route::get('/painel/categorias', CategoryIndexController::class)->name('index');
        Route::post('/painel/categorias', CategoryStoreController::class)->name('store');
        Route::patch('/painel/categories/{category}', CategoryUpdateController::class)->name('patch');
    });

    Route::name('uniforms.')->group(function () {
        Route::get('/painel/uniformes', UniformIndexController::class)->name('index');
        Route::post('/painel/uniformes', UniformStoreController::class)->name('store');
        Route::patch('/painel/uniformes/{uniform}', UniformPatchController::class)->name('patch');
    });
});

Route::name('categories.')->group(function () {
    Route::get('/categorias', CategoriesIndexController::class)->name('index');
});

Route::name('most-liked.')->group(function () {
    Route::get('mais-curtidos', fn () => Inertia::render('MostLiked/TheMostLiked'))->name('index');
});

Route::name('favorites.')->group(function () {
    Route::get('meus-favoritos', fn () => Inertia::render('Favorites/TheFavorites'))->name('index');
});

Route::middleware(['auth', 'can:' . Permission::ACCESS_ADMIN_PANEL])->name('api.')->group(function () {
    Route::get('/api/categorias', CategoriesGetController::class)->name('categories.get');
});

// require __DIR__ . '/auth.php';
