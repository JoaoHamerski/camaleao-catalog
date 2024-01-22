<?php

namespace Domains\Dashboard\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Inertia\Inertia;

class DashboardCategoryIndexController extends Controller
{
    public function __invoke()
    {
        $categories = Category::query()->paginate(10);

        return Inertia::render('DashboardCategories/TheDashboardCategories', [
            'categories' => $categories
        ]);
    }
}
