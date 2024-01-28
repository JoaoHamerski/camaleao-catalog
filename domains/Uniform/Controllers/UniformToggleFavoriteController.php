<?php

namespace Domains\Uniform\Controllers;

use App\Http\Controllers\Controller;
use Domains\Uniform\Actions\UniformToggleFavoriteAction;
use Domains\Uniform\Models\Uniform;
use Domains\Uniform\Requests\UniformToggleRequest;
use Illuminate\Support\Facades\Auth;

class UniformToggleFavoriteController extends Controller
{
    public function __invoke(Uniform $uniform)
    {
        if (!Auth::check()) {
            return redirect()->back()->withErrors([
                'unautenticated'
            ]);
        }

        UniformToggleFavoriteAction::execute($uniform);

        return redirect()->back();
    }
}
