<?php

namespace Domains\DashboardCategory\Controllers;

use App\Http\Controllers\Controller;
use Domains\DashboardCategory\Actions\CategoryUpsertAction;
use Domains\DashboardCategory\Requests\CategoryRequest;

class DashboardCategoryStoreController extends Controller
{
    public function __invoke(CategoryRequest $request)
    {
        CategoryUpsertAction::execute($request);

        return redirect()->route('dashboard.categories.index');
    }
}
