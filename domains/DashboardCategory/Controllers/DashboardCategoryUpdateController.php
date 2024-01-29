<?php

namespace Domains\DashboardCategory\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\DashboardCategory\Actions\CategoryUpsertAction;
use Domains\DashboardCategory\Requests\CategoryRequest;
use Illuminate\Http\Request;

class DashboardCategoryUpdateController extends Controller
{
    public function __invoke(Request $request, Category $category)
    {
        CategoryUpsertAction::execute($request, $category);

        return redirect()->route('dashboard.categories.index');
    }
}
