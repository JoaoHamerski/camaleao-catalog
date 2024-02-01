<?php

namespace Domains\Uniform\Models;

use Domains\Category\Models\Category;
use Domains\Common\Traits\HasFiles;
use Domains\Common\Utils\FileOptions;
use Domains\User\Models\User;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
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
        'images',
    ];

    protected $casts = [
        'images' => 'json'
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
            ->setDirsMap(['images' => 'public/uniformes'])
            ->setAliases(['images' => 'images.*.filename']);
    }

    public function isFavorited(): Attribute
    {
        $user = Auth::user();

        return Attribute::make(
            get: fn () => $user ? !!$this->users()->find($user->id) : false
        );
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'favorite_uniforms')
            ->using(FavoriteUniform::class);
    }
}
