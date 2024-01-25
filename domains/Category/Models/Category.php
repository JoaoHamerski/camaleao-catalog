<?php

namespace Domains\Category\Models;

use Domains\Shared\Traits\HasFile;
use Domains\Shared\Utils\FileOptions;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;
    use HasUuids;
    use HasSlug;
    use HasFile;

    protected $fillable = [
        'name',
        'image'
    ];

    protected $casts = [
        'image' => 'json'
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public static function getFileOptions(): FileOptions
    {
        return FileOptions::create()
            ->setDirsMap(['image' => 'public/categorias'])
            ->setAliases(['image' => 'image.filename']);
    }
}
