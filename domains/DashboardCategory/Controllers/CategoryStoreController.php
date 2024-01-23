<?php

namespace Domains\DashboardCategory\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Data\CategoryData;
use Domains\DashboardCategory\Actions\CategoryCreateAction;
use Domains\DashboardCategory\Requests\CategoryStoreRequest;

class CategoryStoreController extends Controller
{
    public function __invoke(CategoryStoreRequest $request)
    {
        CategoryCreateAction::execute(
            CategoryData::fromArray($request->all())
        );

        return redirect()->route('dashboard.categories.index');
    }
}
