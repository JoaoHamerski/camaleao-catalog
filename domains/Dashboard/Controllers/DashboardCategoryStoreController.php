<?php

namespace Domains\Dashboard\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\Dashboard\Requests\DashboardCategoryStoreRequest;

class DashboardCategoryStoreController extends Controller
{
    public function __invoke(DashboardCategoryStoreRequest $request)
    {
        $file = $request->image->store('/public/categorias');
        $filename = explode('/', $file)[2];

        $image = json_encode([
            'name' => $request->image->getClientOriginalName(),
            'filename' => $filename
        ]);

        Category::create([
            'name' => $request->name,
            'image' => $image
        ]);

        return redirect()->route('dashboard.categories.index');
    }
}
