<?php

namespace Tests\Unit;

use Domains\Shared\Utils\FileOptions;
use PHPUnit\Framework\TestCase;

class FileOptionsTest extends TestCase
{
    public function test_can_get_dirs_for_field(): void
    {
        $fileOptions = new FileOptions();

        $field = 'test_field';
        $folder = 'test_folder/file.png';

        $fileOptions->setDirsMap([
            $field => 'test_folder/file.png'
        ]);

        $this->assertEquals($fileOptions->getDirFor($field), $folder);
    }
}
