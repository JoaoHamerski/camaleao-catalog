<?php

namespace Domains\DashboardUniform\Actions;

use Domains\Category\Models\Category;
use Domains\Uniform\Models\Uniform;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class UniformUpsertAction
{
    public static function execute(Request $request, Uniform $uniform = null)
    {
        $category = Category::find($request->get('category'));

        if ($uniform) {
            $uniform->category()->associate($category);
            $uniform->update([
                ...$request->all(),
                'images' => self::handleFiles($request, $uniform)
            ]);

            return;
        }

        $category->uniforms()->create([
            ...$request->all(),
            'images' => self::handleFiles($request)
        ]);
    }

    public static function handleFiles(Request $request, Uniform $uniform = null)
    {
        $files = Uniform::storeFiles($request->images, 'images');

        if ($uniform) {
            $uniform->deleteFile('images');
        }

        return Arr::map($files, fn ($file) => [
            'filename' => $file->filename,
            'name' => $file->originalName
        ]);
    }
}
