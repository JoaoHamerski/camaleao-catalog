<?php

namespace Domains\Uniform\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class UniformMostLikedController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('MostLiked/TheMostLiked');
    }
}
