<?php

namespace Domains\Common\Utils;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;

class File
{
    public string $filename;
    public string $filepath;
    public string $extension;
    public string $originalName;
    public function __construct(UploadedFile $file, $storagePath)
    {
        $filepath = $file->store($storagePath);

        $this->filepath = $filepath;
        $this->filename = Str::of($filepath)->afterLast('/');
        $this->extension = $file->getClientOriginalExtension();
        $this->originalName = $file->getClientOriginalName();
    }
}
