<?php

Route::get('/', function () {
    return redirect()->route('categories.index');
})->name('home');
