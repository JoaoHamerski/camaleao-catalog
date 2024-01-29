<?php

use Inertia\Inertia;

Route::name('most-liked.')->group(function () {
    Route::get('mais-curtidos', fn () => Inertia::render('MostLiked/TheMostLiked'))->name('index');
});
