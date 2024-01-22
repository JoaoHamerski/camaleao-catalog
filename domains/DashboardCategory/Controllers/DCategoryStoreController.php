<?php

namespace Domains\DashboardCategory\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Data\CategoryData;
use Domains\DashboardCategory\Actions\DCategoryCreateAction;
use Domains\DashboardCategory\Requests\DCategoryStoreRequest;

class DCategoryStoreController extends Controller
{
    public function __invoke(DCategoryStoreRequest $request)
    {
        DCategoryCreateAction::execute(
            CategoryData::fromArray($request->all())
        );

        return redirect()->route('dashboard.categories.index');
    }
}
