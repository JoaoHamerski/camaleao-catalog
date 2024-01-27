<?php

namespace Domains\DashboardUniform\Controllers;

use App\Http\Controllers\Controller;
use Domains\DashboardUniform\Actions\UniformUpsertAction;
use Domains\DashboardUniform\Requests\UniformStoreRequest;
use Domains\Uniform\Models\Uniform;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class UniformPatchController extends Controller
{
    public function __invoke(UniformStoreRequest $request, Uniform $uniform)
    {
        UniformUpsertAction::execute($request, $uniform);
    }
}
