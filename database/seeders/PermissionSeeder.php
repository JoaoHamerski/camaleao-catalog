<?php

namespace Database\Seeders;

use Domains\Shared\Actions\SyncPermissionsAction;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SyncPermissionsAction::execute();
    }
}
