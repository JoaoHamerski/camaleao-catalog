<?php

namespace Domains\DashboardCategory\Actions;

use App\Utils\Helpers;
use Domains\Category\Data\CategoryData;
use Domains\Category\Models\Category;
use Illuminate\Support\Str;

class CategoryCreateAction
{
    public static function execute(CategoryData $category): Category
    {
        $file = $category->image->store(Category::$FILES_FOLDER);
        $filename = Str::afterLast($file, '/');

        return Category::create([
            'name' => $category->name,
            'image' => [
                'name' => $category->image->getClientOriginalName(),
                'filename' => $filename
            ]
        ]);
    }
}
