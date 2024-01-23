<?php

namespace Domains\DashboardUniform\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class UniformIndexController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('DashboardUniform/TheDashboardUniforms');
    }
}
