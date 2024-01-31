<?php

namespace Database\Seeders;

use Domains\User\Actions\SyncUsersPermissionsAction;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SyncUsersPermissionsAction::execute();
    }
}
