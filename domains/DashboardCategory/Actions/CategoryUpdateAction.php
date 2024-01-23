<?php

namespace Domains\DashboardCategory\Actions;

use Domains\Category\Models\Category;
use Illuminate\Support\Str;

class CategoryUpdateAction
{
    public static function execute(Category $category, $request): void
    {
        $file = $request->image->store(Category::$FILES_FOLDER);
        $filename = Str::afterLast($file, '/');

        $category->update([
            'name' => $request->name,
            'image' => [
                'name' => $request->image->getClientOriginalName(),
                'filename' => $filename
            ]
        ]);
    }
}
