<?php

namespace Domains\Dashboard\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardHomeController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Dashboard/TheDashboard');
    }
}
