<?php

namespace Domains\Home\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomeIndexController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Home/TheHome');
    }
}
