<?php

namespace Domains\Category\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CategoriesIndexController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Categories/TheCategories');
    }
}
