<?php

namespace Domains\Category\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\Category\Resources\CategoryResource;
use Domains\DashboardUniform\Resources\UniformResource;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CategoryShowController extends Controller
{
    public function __invoke(Category $category)
    {
        $uniforms = $category
            ->uniforms()
            ->orderBy('created_at', 'desc')
            ->paginate(12, ['*'], 'pagina');

        $categories = Category::query()->orderBy('name', 'asc')->get();
        return Inertia::render('Categories/TheCategoriesShow', [
            'meta' => [
                'title' => $category->name,
                'description' => $category->name,
                'image' => url(Storage::url('categorias/' . $category->image['filename']))
            ],
            'category' => $category,
            'categories' => CategoryResource::collection($categories),
            'uniforms' => UniformResource::collection($uniforms)
        ]);
    }
}
