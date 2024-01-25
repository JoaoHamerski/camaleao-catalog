<?php

namespace Tests\Setup;

use Domains\Shared\Utils\FileOptions;
use Illuminate\Support\Str;

class FileOptionsSetup
{
    private FileOptions $fileOptions;

    public function __construct()
    {
        $this->fileOptions = FileOptions::create();
    }

    public function get()
    {
        return $this->fileOptions;
    }

    public function setupDirsMap()
    {
        $this->fileOptions->setDirsMap([
            static::getFieldKey() => static::getDirKey()
        ]);

        return $this;
    }

    public function setupAliasesMap()
    {
        #write a hello world
    }

    public static function getFieldKey()
    {
        return (string) Str::of(fake()->words(3, true))->snake();
    }

    public static function getDirKey()
    {
        return fake()->filePath() . '.' . fake()->fileExtension();
    }
}
