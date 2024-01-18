<?php

namespace Domains\City\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class City extends Model
{
    use HasFactory;
    use HasUuids;
    use HasSlug;

    protected $fillable = [
        'api_id',
        'name'
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    // public function state()
    // {
    //     return $this->belongsTo(State::class);
    // }

    // public function users()
    // {
    //     return $this->hasMany(User::class);
    // }
}
