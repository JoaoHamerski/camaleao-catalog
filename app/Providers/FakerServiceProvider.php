<?php

namespace App\Providers;

use Faker\Factory;
use Illuminate\Support\ServiceProvider;
use Faker\Generator;
use Smknstd\FakerPicsumImages\FakerPicsumImagesProvider;

class FakerServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register()
    {
        $this->app->afterResolving(function (mixed $instance) {
            if ($instance instanceof Generator) {
                $instance->addProvider(new FakerPicsumImagesProvider($instance));
            }
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
