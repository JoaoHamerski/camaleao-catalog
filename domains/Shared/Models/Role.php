<?php

namespace Domains\Shared\Models;

use Spatie\Permission\Models\Role as SpatieRole;

class Role extends SpatieRole
{
    public const SUPER_ADMIN = 'SUPER_ADMIN';
    public const ADMIN = 'ADMIN';
    public const ATENDIMENTO =  'ATENDIMENTO';
}
