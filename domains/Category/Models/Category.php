<?php

namespace Domains\Category\Models;

use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;
    use HasUuids;
    use HasSlug;

    public static $FILES_FOLDER = '/public/categorias';
    public static $FILES_PUBLIC_FOLDER = '/storage/categorias';

    // protected $appends = [
    //     'uniforms_count'
    // ];

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

    public function imageUrl(): Attribute
    {
        $filename = $this->image['filename'];
        $filepath = self::$FILES_PUBLIC_FOLDER . '/' . $filename;


        return Attribute::make(
            fn () => url($filepath)
        );
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


    // public function uniformsCount(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn () => $this->uniforms()->count()
    //     );
    // }
}
