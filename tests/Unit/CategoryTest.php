<?php

namespace Tests\Unit;

use Domains\Category\Models\Category;
use Domains\Shared\Utils\FileOptions;
use Illuminate\Support\Arr;
use PHPUnit\Framework\TestCase;

class CategoryTest extends TestCase
{
    public function test_has_file_options(): void
    {
        $this->assertInstanceOf(
            FileOptions::class,
            Category::getFileOptions()
        );
    }

    public function test_file_options_dirs_are_settted(): void
    {
        $options = Category::getFileOptions();

        $this->assertIsArray($options->getDirsMap());
    }

    public function test_aliases_match_fields_if_setted()
    {
        $options = Category::getFileOptions();

        if (empty($options->getAliases())) {
            $this->assertTrue(true);
            return;
        }

        $aliasesFields = array_keys($options->getAliases());
        $dirFields = array_keys($options->getDirsMap());

        $this->assertEmpty(
            array_diff($aliasesFields, $dirFields)
        );
    }
}
