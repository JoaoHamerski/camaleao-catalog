<?php

use Domains\Api\Controllers\CategoriesGetController;
use Domains\Category\Controllers\CategoriesIndexController;
use Domains\Category\Controllers\CategoriesShowController;
use Domains\Dashboard\Controllers\DashboardHomeController;
use Domains\DashboardCategory\Controllers\CategoryDeleteController;
use Domains\DashboardCategory\Controllers\CategoryIndexController;
use Domains\DashboardCategory\Controllers\CategoryStoreController;
use Domains\DashboardCategory\Controllers\CategoryUpdateController;
use Domains\DashboardUniform\Controllers\UniformDeleteController;
use Domains\DashboardUniform\Controllers\UniformIndexController;
use Domains\DashboardUniform\Controllers\UniformPatchController;
use Domains\DashboardUniform\Controllers\UniformStoreController;
use Domains\Favorites\Controllers\MyFavoritesController;
use Domains\Shared\Models\Permission;
use Domains\Uniform\Controllers\UniformsShowController;
use Domains\Uniform\Controllers\UniformToggleFavoriteController;
use Domains\User\Controllers\UserRegisterController;
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
    return redirect()->route('categories.index');
})->name('home');


foreach (glob(__DIR__ . '/partials/*-routes.php') as $file) {
    require $file;
}
