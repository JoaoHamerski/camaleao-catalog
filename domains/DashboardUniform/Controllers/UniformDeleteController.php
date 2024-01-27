<?php

namespace Domains\DashboardUniform\Controllers;

use App\Http\Controllers\Controller;
use Domains\Uniform\Models\Uniform;
use Illuminate\Http\Request;

class UniformDeleteController extends Controller
{
    public function __invoke(Uniform $uniform)
    {
        $uniform->delete();
    }
}
