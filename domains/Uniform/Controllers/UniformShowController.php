<?php

namespace Domains\Uniform\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\DashboardUniform\Resources\UniformResource;
use Domains\Uniform\Models\Uniform;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UniformShowController extends Controller
{
    public function __invoke(Category $category, Uniform $uniform)
    {
        $uniform = new UniformResource($uniform->load('category'));

        return Inertia::render('Uniforms/TheUniformsShow', [
            'meta' => [
                'title' => $uniform->name,
                'description' => 'Uniforme',
                'image' => url(Storage::url('categorias/' . $uniform->images[0]['filename']))
            ],
            'uniform' => $uniform
        ]);
    }
}
