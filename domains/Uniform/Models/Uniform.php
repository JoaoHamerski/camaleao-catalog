<?php

namespace Domains\Uniform\Models;

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

    // public static $FILES_FOLDER = 'public/uniformes/';
    // public static $FILES_PUBLIC_FOLDER = 'storage/uniformes/';

    protected $fillable = [
        'name',
        'images'
    ];

    // protected $appends = [
    //     'is_favorited',
    //     'favorites_count'
    // ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    // public function images(): Attribute
    // {
    //     return Attribute::make(
    //         get: function ($value) {
    //             $images = json_decode($value);

    //             return Arr::map(
    //                 $images,
    //                 fn ($image) => [
    //                     'name' => $image->name,
    //                     'url' => url(static::$FILES_PUBLIC_FOLDER . $image->filename)
    //                 ]
    //             );
    //         }
    //     );
    // }

    // public function isFavorited(): Attribute
    // {
    //     $user = Auth::user();

    //     return Attribute::make(
    //         get: fn () => $user
    //             ? !!$this->usersHaveFavorited()->find($user->id)
    //             : false
    //     );
    // }

    // public function favoritesCount(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn () => $this->usersHaveFavorited()->count()
    //     );
    // }

    // public function category()
    // {
    //     return $this->belongsTo(Category::class);
    // }

    // public function usersHaveFavorited()
    // {
    //     return $this->belongsToMany(
    //         User::class,
    //         'favorite_uniforms'
    //     )->using(FavoriteUniform::class);
    // }
}
