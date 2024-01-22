<?php

use Domains\Dashboard\Controllers\DashboardCategoryIndexController;
use Domains\Dashboard\Controllers\DashboardHomeController;
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

Route::middleware(['auth', 'can:access_admin_panel'])->name('dashboard.')->group(function () {
    Route::get('/painel', DashboardHomeController::class)->name('index');

    Route::name('categories.')->group(function () {
        Route::get('/painel/categorias', DashboardCategoryIndexController::class)->name('index');
    });
});

// require __DIR__ . '/auth.php';
