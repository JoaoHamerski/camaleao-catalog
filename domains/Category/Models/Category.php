<?php

namespace Domains\Category\Models;

use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;
    use HasUuids;
    use HasSlug;

    // public static $FILES_FOLDER = 'public/categorias/';
    // public static $FILES_PUBLIC_FOLDER = 'storage/categorias/';

    // protected $appends = [
    //     'uniforms_count'
    // ];

    protected $fillable = [
        'name',
        'image'
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    // public function deleteStoredImage(): void
    // {
    //     $filepath = static::$FILES_FOLDER . $this->imageFilename;

    //     if (!Storage::delete($filepath)) {
    //         throw new UnprocessableException(
    //             'Erro',
    //             'Não foi possível deletar o arquivo relacionado à categoria'
    //         );
    //     }
    // }

    // public function uniforms()
    // {
    //     return $this->hasMany(Uniform::class);
    // }

    // public function imageFilename(): Attribute
    // {
    //     $image = json_decode($this->getRawOriginal('image'));
    //     $filename = $image->filename;

    //     return Attribute::make(
    //         get: fn () => $filename
    //     );
    // }

    // public function image(): Attribute
    // {
    //     return Attribute::make(
    //         get: function ($value) {
    //             $image = json_decode($value);

    //             return [
    //                 'name' => $image->name,
    //                 'url' => url(static::$FILES_PUBLIC_FOLDER . $image->filename)
    //             ];
    //         }
    //     );
    // }

    // public function uniformsCount(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn () => $this->uniforms()->count()
    //     );
    // }
}
