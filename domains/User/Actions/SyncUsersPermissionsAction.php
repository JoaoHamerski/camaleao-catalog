<?php

namespace Domains\User\Actions;

use Domains\Shared\Models\Permission;
use Domains\Shared\Models\Role;
use Illuminate\Support\Arr;

class SyncUsersPermissionsAction
{
    public const SUPER_ADMIN_KEY = 'SUPER_ADMIN';
    public const PERMISSIONS_FILEPATH = 'domains/User/permissions.json';

    public static function execute()
    {
        $roles = static::getRoles();

        unset($roles[static::SUPER_ADMIN_KEY]);

        foreach ($roles as $key => $role) {
            $permissions = static::getRolePermissions($role);
            Role::findOrCreate($key)->syncPermissions($permissions);
        }

        static::addAllPermissionsToSuperAdmin();
    }

    /**
     * @return array<string,array<string,string>>
     */
    public static function getRoles()
    {
        $filepath = base_path(static::PERMISSIONS_FILEPATH);
        $rolesJson = file_get_contents($filepath);

        return json_decode($rolesJson, true);
    }

    /**
     * @param string[] $role
     * @return string[]
     */
    public static function getRolePermissions(array $role)
    {
        return Arr::map(
            $role,
            fn ($permission) => Permission::findOrCreate($permission)
        );
    }

    /**
     * @return void
     */
    public static function addAllPermissionsToSuperAdmin()
    {
        $permissions = Permission::all();

        Role::findOrCreate(static::SUPER_ADMIN_KEY)
            ->syncPermissions($permissions);
    }
}
