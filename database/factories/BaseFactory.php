<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

abstract class BaseFactory extends Factory
{
    public function generateImage(string $storagePath): string
    {
        $sizes = $this->getImageSizes();

        $filepath = fake()->image($storagePath, $sizes['w'], $sizes['h']);

        return Str::afterLast($filepath, '/');
    }

    /**
     *
     * @return array<string,int>
     */
    public function getImageSizes(): array
    {
        $defaultSizes = ['w' => 300, 'h' => 300];
        $randomSizes = [
            'w' => fake()->numberBetween(250, 500),
            'h' => fake()->numberBetween(250, 500)
        ];

        return fake()->boolean(75)
            ? $defaultSizes
            : $randomSizes;
    }
}
