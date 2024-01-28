<?php

namespace Domains\User\Controllers;

use App\Http\Controllers\Controller;
use Domains\City\Models\City;
use Domains\Shared\Models\State;
use Domains\User\Requests\UserRegisterRequest;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class UserRegisterController extends Controller
{
    public function __invoke(UserRegisterRequest $request)
    {
        $city = $this->getCity($request->city);


        $user = $city->users()->create($request->all());

        Auth::login($user);

        return redirect()->route('home');
    }

    public function getCity($city): City
    {
        $state = State::where('abbreviation', $city['UF-sigla'])->first();

        return $state->cities()->firstOrCreate(
            ['api_id' => Arr::get($city, 'municipio-id')],
            ['name' => Arr::get($city, 'municipio-nome')]
        );
    }
}
