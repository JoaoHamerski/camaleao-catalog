<?php

namespace Domains\DashboardCategory\Actions;

use Domains\Category\Data\CategoryData;
use Domains\Category\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryUpsertAction
{
    public static function execute(Request $request, Category | CategoryData $category = null): Category
    {
        $categoryInput = CategoryData::fromArray([
            ...$request->all(),
            'image' => static::handleImage($request, $category)
        ]);

        if ($category) {
            return static::update($category, $categoryInput);
        }

        return static::create($categoryInput);
    }

    public static function create($data): Category
    {
        return Category::create(static::getFormattedData($data));
    }

    public static function update(Category $category, CategoryData $data): Category
    {
        $category->update(static::getFormattedData($data));

        return $category;
    }

    public static function handleImage(Request $request, Category $category = null): array
    {
        $file = Category::storeFiles($request->image, 'image');

        if ($category) {
            $category->deleteFile('image');
        }

        return [
            'name' => $request->image->getClientOriginalName(),
            'filename' => $file->filename
        ];
    }

    public static function getFormattedData(CategoryData $categoryInput): array
    {
        return [
            'name' => $categoryInput->name,
            'image' => $categoryInput->image
        ];
    }
}
