<?php

namespace Domains\Category\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\Category\Resources\CategoryResource;
use Inertia\Inertia;

class CategoryIndexController extends Controller
{
    public function __invoke()
    {
        $categories = Category::query()
            ->whereHas('uniforms')
            ->orderBy('name', 'asc')
            ->paginate(12, ['*'], 'pagina');

        return Inertia::render('Categories/TheCategories', [
            'meta' => [
                'title' => 'Categorias',
                'description' => 'Categorias de uniformes da Camaleão Camisas',
                'image' => 'asd'
            ],
            'categories' => CategoryResource::collection($categories)
        ]);
    }
}
