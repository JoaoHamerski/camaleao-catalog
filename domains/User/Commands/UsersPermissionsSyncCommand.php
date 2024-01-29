<?php

namespace Domains\User\Commands;

use Domains\User\Actions\SyncPermissionsAction;
use Error;
use Illuminate\Console\Command;

class UsersPermissionsSyncCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:sync-permissions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Inicializa as regras e permissões de autenticação';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try {
            SyncPermissionsAction::execute();
            $this->info('Regras de autenticação inicializadas!');
        } catch (Error $e) {
            $this->error($e->getMessage());
        }
    }
}
