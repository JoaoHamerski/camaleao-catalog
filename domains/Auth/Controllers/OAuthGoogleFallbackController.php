<?php

namespace Domains\Auth\Controllers;

use App\Http\Controllers\Controller;
use Domains\User\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class OAuthGoogleFallbackController extends Controller
{
    public function __invoke()
    {
        $googleUser = Socialite::driver('google')->user();

        $user = $this->getUser($googleUser, 'google');

        Auth::login($user, true);

        return redirect()->route('home');
    }

    public function getUser($user, $type)
    {
        if (
            $this->emailExists($user)
            && !$this->emailIsLinked($user, $type)
        ) {
            $user = User::where('email', $user->email)->first();

            $user->update([
                'google_id' => $user->id,
                'google_token' => $user->token
            ]);
        } else {
            $user = $this->updateOrCreate($user);
        }

        return $user;
    }

    public function updateOrCreate($user)
    {
        return User::updateOrCreate([
            'google_id' => $user->id,
        ], [
            'name' => $user->name,
            'email' => $user->email,
            'google_token' => $user->token
        ]);
    }

    public function emailExists($user)
    {
        return User::where('email', $user->email)->exists();
    }

    public function emailIsLinked($user, string $type)
    {
        $user = User::where('email', $user->email)->first();

        return $user->google_id !== null;
    }
}
