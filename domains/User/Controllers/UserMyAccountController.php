<?php

namespace Domains\User\Controllers;

use App\Http\Controllers\Controller;
use Domains\User\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserMyAccountController extends Controller
{
    public function __invoke()
    {
        $user = Auth::user()->load(['city', 'city.state']);

        return Inertia::render('MyAccount/TheMyAccount', [
            'user' => new UserResource($user)
        ]);
    }
}
