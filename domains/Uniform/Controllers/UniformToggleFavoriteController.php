<?php

namespace Domains\Uniform\Controllers;

use App\Http\Controllers\Controller;
use Domains\Uniform\Models\Uniform;
use Illuminate\Support\Facades\Auth;

class UniformToggleFavoriteController extends Controller
{
    public function __invoke(Uniform $uniform)
    {
        Auth::user()->toggleFavorite($uniform);

        return redirect()->back();
    }
}
