<?php

namespace Domains\User\Controllers;

use App\Http\Controllers\Controller;
use Domains\User\Requests\UserLoginRequest;

class UserLoginController extends Controller
{
    public function __invoke(UserLoginRequest $request)
    {
        $request->authenticate();

        return redirect('home');
    }
}
