<?php

namespace Domains\Shared\Traits;

use Domains\Shared\Utils\File;
use Domains\Shared\Utils\FileOptions;
use Error;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

trait HasFiles
{
    abstract public static function getFileOptions(): FileOptions;

    public function getFilePublicUrl(string $field)
    {
        $filepath = $this->getFilePath($field);

        if (is_array($filepath)) {
            return Arr::map($filepath, fn ($_filepath) => Storage::url($_filepath));
        }
        // if (!$this->isFilePublic($field)) {
        //     throw new Error("The file for \"{$field}\" field isn't public");
        // }

        return Storage::url($filepath);
    }

    private static function storeFile(UploadedFile $file, string $field)
    {
        $storagePath = static::getStoragePath($field);

        return new File($file, $storagePath);
    }

    public static function storeFiles(UploadedFile | array $files, $field)
    {
        if (is_array($files)) {
            return Arr::map(
                $files,
                fn ($file) => static::storeFile($file, $field)
            );
        }

        return static::storeFile($files, $field);
    }

    public function deleteFile($field)
    {
        $filepath = $this->getFilePath($field);

        return Storage::delete($filepath);
    }

    public function getFilename(string $field)
    {
        $fileOptions = static::getFileOptions();
        $accessorProp = $fileOptions->getFieldAccessor($field);

        return data_get($this, $accessorProp);
    }

    public function getFilePath(string $field)
    {
        $filename = $this->getFilename($field);

        if (is_array($filename)) {
            return Arr::map($filename, fn ($name) => static::getStoragePath($field) .'/'. $name);
        }

        return static::getStoragePath($field) . '/' . $filename;
    }

    public static function getStoragePath(string $field)
    {
        $fileOptions = static::getFileOptions();

        return $fileOptions->getDirFor($field);
    }

    public function isFilePublic(string $field)
    {
        $filepath = $this->getFilePath($field);

        return Str::of($filepath)->startsWith(['public/', '/public/']);
    }
}
