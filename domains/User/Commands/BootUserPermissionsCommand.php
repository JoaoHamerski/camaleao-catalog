<?php

namespace Domains\User\Commands;

use Domains\User\Actions\BootUserPermissionsAction;
use Error;
use Illuminate\Console\Command;

class BootUserPermissionsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:boot-user-permissions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Inicializa as regras e permissões de autenticação.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try {
            BootUserPermissionsAction::execute();
            $this->info('Regras de autenticação inicializadas!');
        } catch (Error $e) {
            $this->error($e->getMessage());
        }
    }
}
