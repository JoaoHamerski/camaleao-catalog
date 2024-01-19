<?php

namespace Domains\User\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserLogoutController extends Controller
{
    public function __invoke()
    {
        Auth::logout();

        return redirect()->route('home');
    }
}
