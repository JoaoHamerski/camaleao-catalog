<?php

namespace Domains\Category\Data;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;

class CategoryData
{
    public function __construct(
        public readonly ?int $id,
        public readonly string $name,
        public readonly ?string $imageUrl,
        public readonly array | UploadedFile $image
    ) {
        //
    }

    public static function fromArray(array $data): self
    {
        return new static(
            Arr::get($data, 'id'),
            Arr::get($data, 'name'),
            Arr::get($data, 'image_url'),
            Arr::get($data, 'image'),
        );
    }
}
