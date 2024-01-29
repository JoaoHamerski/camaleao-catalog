<?php

namespace Domains\Common\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class State extends Model
{
    use HasFactory;
    use HasUuids;
    use HasSlug;

    protected $fillable = [
        'name',
        'abbreviation'
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function cities(): HasMany
    {
        return $this->hasMany(City::class);
    }
}
