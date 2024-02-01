<?php

namespace Domains\User\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserAccountDeleteController extends Controller
{
    public function __invoke(Request $request)
    {
        Validator::make($request->all(), [
            'password' => 'current_password'
        ])->validate();

        $user = Auth::user();

        $user->delete();

        return redirect()->route('home');
    }
}
