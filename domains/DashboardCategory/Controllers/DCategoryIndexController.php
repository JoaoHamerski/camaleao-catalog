<?php

namespace Domains\DashboardCategory\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\DashboardCategory\Resources\CategoryResource;
use Inertia\Inertia;

class DCategoryIndexController extends Controller
{
    public function __invoke()
    {
        $categories = Category::query()->paginate(10);

        return Inertia::render('DashboardCategory/TheDashboardCategories', [
            'categories' => CategoryResource::collection($categories)
        ]);
    }
}
