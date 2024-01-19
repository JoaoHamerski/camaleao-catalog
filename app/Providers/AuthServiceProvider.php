<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use Domains\User\Constants\RoleConstants;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        Gate::before(function ($user) {
            return $user->hasRole(RoleConstants::SUPER_ADMIN) ? true : null;
        });
    }
}
