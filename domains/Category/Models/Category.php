<?php

namespace Domains\Category\Models;

use Domains\Common\Traits\HasFiles;
use Domains\Common\Utils\FileOptions;
use Domains\Uniform\Models\Uniform;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;
    use HasUuids;
    use HasSlug;
    use HasFiles;

    protected $fillable = [
        'name',
        'image'
    ];

    protected $casts = [
        'image' => 'json'
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

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

    public function uniformsCount(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->uniforms()->count()
        );
    }

    public function uniforms(): HasMany
    {
        return $this->hasMany(Uniform::class);
    }
}
