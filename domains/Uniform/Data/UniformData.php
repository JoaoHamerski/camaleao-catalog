<?php

namespace Domains\Uniform\Data;

use Domains\Category\Models\Category;
use Illuminate\Support\Arr;

class UniformData
{
    public function __construct(
        public readonly ?int $id,
        public readonly ?string $name,
        public readonly ?Category $category,
        public readonly ?array $images
    ) {
        //
    }

    public static function fromArray(array $data): self
    {
        return new static(
            Arr::get($data, 'id'),
            Arr::get($data, 'name'),
            Arr::get($data, 'category'),
            Arr::get($data, 'images'),
        );
    }
}
