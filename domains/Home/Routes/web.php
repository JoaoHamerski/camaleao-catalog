<?php

use Domains\Category\Models\Category;

Route::get('/', function () {
    return redirect()->route('categories.show', [
        'category' => Category::first(),
        // 'category' => Category::where('name', 'futebol')->first()
    ]);
})->name('home');
