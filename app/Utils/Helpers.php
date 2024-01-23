<?php

namespace App\Utils;

use Illuminate\Support\Arr;

class Helpers
{
    public static function getFilenameFromFilepath(string $value): string
    {
        return Arr::last(explode('/', $value));
    }
}
