<?php

namespace Domains\DashboardCategory\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\DashboardCategory\Actions\CategoryUpdateAction;
use Domains\DashboardCategory\Requests\CategoryRequest;

class CategoryUpdateController extends Controller
{
    public function __invoke(CategoryRequest $request, Category $category)
    {
        CategoryUpdateAction::execute($category, $request);

        return redirect()->route('dashboard.categories.index');
    }
}
