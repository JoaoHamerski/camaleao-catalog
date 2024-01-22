<?php

namespace Domains\DashboardCategory\Actions;

use App\Utils\Helpers;
use Domains\Category\Data\CategoryData;
use Domains\Category\Models\Category;

class DCategoryCreateAction
{
    public static function execute(CategoryData $category): Category
    {
        $file = $category->image->store(Category::$FILES_FOLDER);
        $filename = Helpers::getNameFromFilepath($file);

        return Category::create([
            'name' => $category->name,
            'image' => [
                'name' => $category->image->getClientOriginalName(),
                'filename' => $filename
            ]
        ]);
    }
}
