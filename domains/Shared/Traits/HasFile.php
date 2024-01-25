<?php

namespace Domains\Shared\Traits;

use Domains\Shared\Utils\File;
use Domains\Shared\Utils\FileOptions;
use Error;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

trait HasFile
{
    abstract public static function getFileOptions(): FileOptions;

    public function getFilePublicUrl(string $field)
    {
        $filepath = $this->getFilePath($field);

        if (!$this->isFilePublic($field)) {
            throw new Error("The file for \"{$field}\" field isn't public");
        }

        return Storage::url($filepath);
    }

    public static function storeFile(UploadedFile $file, $field)
    {
        $storagePath = static::getStoragePath($field);

        return new File(
            $file->store($storagePath)
        );
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
