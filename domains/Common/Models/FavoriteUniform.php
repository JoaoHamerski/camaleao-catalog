<?php

namespace Domains\Common\Models;

use Domains\Uniform\Models\Uniform;
use Domains\User\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class FavoriteUniform extends Pivot
{
    use HasFactory;
    use HasUuids;

    protected $table = 'favorite_uniforms';

    public function uniform()
    {
        return $this->belongsTo(Uniform::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
