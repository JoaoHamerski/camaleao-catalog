<?php

namespace Domains\Uniform\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\DashboardUniform\Resources\UniformResource;
use Domains\Uniform\Models\Uniform;
use Inertia\Inertia;

class UniformsShowController extends Controller
{
    public function __invoke(Category $category, Uniform $uniform)
    {
        return Inertia::render('Uniforms/TheUniformsShow', [
            'uniform' => new UniformResource($uniform->load('category'))
        ]);
    }
}
