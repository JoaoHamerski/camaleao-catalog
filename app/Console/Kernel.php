<?php

namespace App\Console;

use Domains\User\Commands\UsersPermissionsSyncCommand;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        UsersPermissionsSyncCommand::class
    ];

    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('inspire')->hourly();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $consoleFiles = glob(base_path('/domains/*/Routes/console.php'));

        foreach ($consoleFiles as $file) {
            require $file;
        }
    }
}
