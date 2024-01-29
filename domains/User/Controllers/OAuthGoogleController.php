<?php

namespace Domains\User\Controllers;

use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;

class OAuthGoogleController extends Controller
{
    public function __invoke()
    {
        return Socialite::driver('google')->redirect();
    }
}
