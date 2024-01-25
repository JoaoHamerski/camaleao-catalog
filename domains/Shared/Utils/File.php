<?php

namespace Domains\Shared\Utils;

use Error;
use Illuminate\Support\Str;

class File
{
    public string $filename;
    public string $filepath;
    public string $extension;

    public function __construct(string $filepath)
    {
        if (!Str::of($filepath)->contains('/')) {
            throw new Error("Invalid filepath: {$filepath}");
        }

        $this->filepath = $filepath;
        $this->filename = Str::of($filepath)->afterLast('/');
        $this->extension = Str::of($filepath)->afterLast('.');
    }

    public static function isFilepathValid($filepath)
    {
        return Str::of($filepath)->contains('/')
            && !empty(pathinfo($filepath, PATHINFO_EXTENSION));
    }
}
