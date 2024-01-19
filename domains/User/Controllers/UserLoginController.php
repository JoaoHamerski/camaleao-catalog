<?php

namespace Domains\User\Controllers;

use App\Http\Controllers\Controller;
use Domains\User\Requests\UserLoginRequest;
use Inertia\Inertia;

class UserLoginController extends Controller
{
    public function __invoke(UserLoginRequest $request)
    {
        $request->authenticate();

        return redirect()->route('home');
    }
}
