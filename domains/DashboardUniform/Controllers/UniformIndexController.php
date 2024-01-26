<?php

namespace Domains\DashboardUniform\Controllers;

use App\Http\Controllers\Controller;
use Domains\DashboardUniform\Resources\UniformResource;
use Domains\Uniform\Models\Uniform;
use Inertia\Inertia;

class UniformIndexController extends Controller
{
    public function __invoke()
    {
        $uniforms = Uniform::query()->orderBy('created_at', 'desc')->paginate(10);

        return Inertia::render('DashboardUniform/TheDashboardUniforms', [
            'uniforms' => UniformResource::collection($uniforms)
        ]);
    }
}
