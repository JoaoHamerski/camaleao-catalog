<?php

namespace Domains\Category\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\DashboardUniform\Resources\UniformResource;
use Inertia\Inertia;

class CategoriesShowController extends Controller
{
    public function __invoke(Category $category)
    {
        $uniforms = $category->uniforms()->paginate(12, ['*'], 'pagina');

        return Inertia::render('Categories/TheCategoriesShow', [
            'category' => $category,
            'uniforms' => UniformResource::collection($uniforms)
        ]);
    }
}
