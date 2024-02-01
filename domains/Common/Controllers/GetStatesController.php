<?php

namespace Domanis\Common\Controllers;

use App\Http\Controllers\Controller;
use Domains\Common\Models\State;

class GetStatesController extends Controller
{
    public function __invoke()
    {
        return State::all();
    }
}
