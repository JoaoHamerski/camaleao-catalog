<?php

namespace Database\Seeders;

use Domains\Common\Models\Role;
use Domains\User\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->createSuperAdmin();

        User::factory(10)->create();
    }

    public function createSuperAdmin(): void
    {
        $user = User::factory()->create([
            'email' => config('app.super_admin.email'),
            'password' => Hash::make(config('app.super_admin.password'))
        ]);

        $user->assignRole(Role::SUPER_ADMIN);
    }
}
