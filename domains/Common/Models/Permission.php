<?php

namespace Domains\Common\Models;

use Spatie\Permission\Models\Permission as SpatiePermission;

class Permission extends SpatiePermission
{
    public const ACCESS_ADMIN_PANEL = 'access_admin_panel';
}
