<?php

namespace Domains\Category\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\Category\Resources\CategoryResource;
use Illuminate\Http\Request;

class CategoriesGetController extends Controller
{
    public function __invoke(Request $request)
    {
        $categories = Category::query()
            ->where('name', 'like', "%{$request->get('name')}%")
            ->orderBy('name', 'asc')
            ->take(10)
            ->get();

        return CategoryResource::collection($categories);
    }
}
