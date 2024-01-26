<?php

namespace Domains\DashboardUniform\Actions;

use Domains\Category\Models\Category;
use Domains\Uniform\Models\Uniform;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class UniformUpsertAction
{
    public static function execute(Request $request)
    {
        $category = Category::find($request->get('category'));

        $category->uniforms()->create([
            ...$request->all(),
            'images' => self::handleFiles($request)
        ]);
    }

    public static function handleFiles(Request $request)
    {
        $files = Uniform::storeFiles($request->images, 'images');

        return Arr::map($files, fn ($file) => [
            'filename' => $file->filename,
            'name' => $file->originalName
        ]);
    }
}
