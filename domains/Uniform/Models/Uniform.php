<?php

namespace Domains\Uniform\Models;

use Domains\Category\Models\Category;
use Domains\Shared\Traits\HasFiles;
use Domains\Shared\Utils\FileOptions;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Uniform extends Model
{
    use HasFactory;
    use HasUuids;
    use HasSlug;
    use HasFiles;

    protected $fillable = [
        'name',
        'images'
    ];

    protected $casts = [
        'images' => 'json'
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
            ->setDirsMap(['images' => 'public/uniformes'])
            ->setAliases(['images' => 'images.*.filename']);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
