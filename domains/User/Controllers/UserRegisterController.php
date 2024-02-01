<?php

namespace Domains\User\Controllers;

use App\Http\Controllers\Controller;
use Domains\Common\Models\City;
use Domains\Common\Models\State;
use Domains\User\Requests\UserRegisterRequest;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class UserRegisterController extends Controller
{
    public function __invoke(UserRegisterRequest $request)
    {
        $city = $this->getCity($request->city, $request->state);

        $user = $city->users()->create($request->all());

        Auth::login($user);

        return redirect()->route('home');
    }

    public function getCity($city, $state): City
    {
        $state = State::where('abbreviation', $state['abbreviation'])->first();

        return $state->cities()->firstOrCreate(
            ['api_id' => Arr::get($city, 'api_id')],
            ['name' => Arr::get($city, 'name')]
        );
    }
}
