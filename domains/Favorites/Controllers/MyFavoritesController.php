<?php

namespace Domains\Favorites\Controllers;

use App\Http\Controllers\Controller;
use Domains\DashboardUniform\Resources\UniformResource;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MyFavoritesController extends Controller
{
    public function __invoke()
    {
        $user = Auth::user();

        return Inertia::render('Favorites/TheFavorites', [
            'uniforms' => $user
                ? UniformResource::collection($user->favorites->load('category'))
                : []
        ]);
    }
}
