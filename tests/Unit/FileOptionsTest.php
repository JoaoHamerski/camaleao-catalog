<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use Tests\Setup\FileOptionsSetup;

class FileOptionsTest extends TestCase
{
    public function test_can_get_dirs_for_field(): void
    {
        $fileOptions = (new FileOptionsSetup())
            ->setupDirsMap()
            ->get();

        $field = fake()->randomKey($fileOptions->getDirsMap());

        $this->assertIsString(
            $fileOptions->getDirFor($field)
        );
    }
}
