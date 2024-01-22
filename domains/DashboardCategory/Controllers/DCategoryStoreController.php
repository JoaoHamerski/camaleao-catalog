<?php

namespace Domains\DashboardCategory\Controllers;

use App\Http\Controllers\Controller;
use Domains\Category\Models\Category;
use Domains\DashboardCategory\Requests\DCategoryStoreRequest;

class DCategoryStoreController extends Controller
{
    public function __invoke(DCategoryStoreRequest $request)
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
