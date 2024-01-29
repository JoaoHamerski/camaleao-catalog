<?php

namespace Database\Seeders;

use Domains\Category\Models\Category;
use Domains\Uniform\Models\Uniform;
use Illuminate\Database\Seeder;

class UniformSeeder extends Seeder
{
    public function run(): void
    {
        $categories = Category::all();

        $categories->each(function ($category) {
            $count = fake()->numberBetween(0, 20);

            Uniform::factory()
                ->count($count)
                ->for($category)
                ->create();
        });
    }
}
