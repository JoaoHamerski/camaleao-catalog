<?php

namespace Domains\Shared\Utils;

use Illuminate\Support\Arr;

class FileOptions
{
    private $dirsMap;
    private $aliases;

    public static function create(): self
    {
        return new static();
    }

    public function getDirsFor(string $field)
    {
        return $this->dirsMap[$field] ?? null;
    }

    public function getFieldAccessor(string $field)
    {
        return $this->fieldHasAlias($field)
            ? data_get($this->aliases, $field)
            : $field;
    }

    private function fieldHasAlias(string $field)
    {
        return Arr::has($this->aliases, $field);
    }

    public function setDirs(array $map)
    {
        $this->dirsMap = $map;

        return $this;
    }

    public function getDirsMap()
    {
        return $this->dirsMap;
    }

    public function setAliases(array $aliases)
    {
        $this->aliases = $aliases;

        return $this;
    }

    public function getAliases()
    {
        return $this->aliases;
    }

}
