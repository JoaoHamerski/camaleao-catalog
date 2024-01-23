<?php

namespace Domains\DashboardCategory\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Data\CategoryData;
use Domains\DashboardCategory\Actions\CategoryCreateAction;
use Domains\DashboardCategory\Requests\CategoryRequest;

class CategoryStoreController extends Controller
{
    public function __invoke(CategoryRequest $request)
    {
        CategoryCreateAction::execute(
            CategoryData::fromArray($request->all())
        );

        return redirect()->route('dashboard.categories.index');
    }
}
