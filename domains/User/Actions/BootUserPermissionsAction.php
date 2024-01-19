<?php

namespace Domains\User\Actions;

use Domains\User\Constants\PermissionConstants;
use Domains\User\Constants\RoleConstants;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class BootUserPermissionsAction
{
    public static function execute()
    {
        $roles =  self::createRoles();
        $permissions = self::createPermissions();

        $permissions[PermissionConstants::ACCESS_ADMIN_PANEL]->syncRoles(
            $roles
        );
    }

    protected static function createRoles()
    {
        return [
            Role::create(['name' => RoleConstants::ADMIN]),
            Role::create(['name' => RoleConstants::SUPER_ADMIN]),
            Role::create(['name' => RoleConstants::ATENDIMENTO])
        ];
    }

    protected static function createPermissions()
    {
        return [
            PermissionConstants::ACCESS_ADMIN_PANEL => Permission::create([
                'name' => PermissionConstants::ACCESS_ADMIN_PANEL
            ])
        ];
    }
}
