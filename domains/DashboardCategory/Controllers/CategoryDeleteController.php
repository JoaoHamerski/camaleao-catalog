<?php

namespace Domains\DashboardCategory\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;

class CategoryDeleteController extends Controller
{
    public function __invoke(Category $category)
    {
        $category->delete();
    }
}
