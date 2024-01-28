<?php

namespace Domains\Uniform\Actions;

use Domains\Uniform\Models\Uniform;
use Illuminate\Support\Facades\Auth;

class UniformToggleFavoriteAction
{
    public static function execute(Uniform $uniform)
    {
        $user = Auth::user();

        if ($uniform->is_favorited) {
            $user->favorites()->detach($uniform);
            return;
        }

        $user->favorites()->attach($uniform);
    }
}
