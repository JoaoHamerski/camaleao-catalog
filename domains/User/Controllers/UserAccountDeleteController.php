<?php

namespace Domains\User\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserAccountDeleteController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = Auth::user();

        Validator::make($request->all(), [
            'password' =>  $user->password ? 'current_password' : ''
        ])->validate();


        $user->delete();

        return redirect()->route('home');
    }
}
