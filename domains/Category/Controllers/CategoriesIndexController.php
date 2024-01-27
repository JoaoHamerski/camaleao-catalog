<?php

namespace Domains\Category\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\DashboardCategory\Resources\CategoryResource;
use Inertia\Inertia;

class CategoriesIndexController extends Controller
{
    public function __invoke()
    {
        $categories = Category::query()->paginate(12, ['*'], 'pagina');

        return Inertia::render('Categories/TheCategories', [
            'categories' => CategoryResource::collection($categories)
        ]);
    }
}
