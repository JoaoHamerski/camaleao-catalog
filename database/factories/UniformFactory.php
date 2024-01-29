<?php

namespace Database\Factories;

use Domains\Category\Models\Category;
use Domains\Uniform\Models\Uniform;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\Domains\Uniform\Models\Uniform>
 */
class UniformFactory extends BaseFactory
{
    protected $model = Uniform::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(2),
            'images' => $this->getImages()
        ];
    }

    /**
     *
     * @return array<string,int>
     */
    public function getImages()
    {
        $storagePath = 'storage/app/' . Uniform::getStoragePath('images');
        $range = range(1, fake()->numberBetween(1, 4));

        return Arr::map($range, fn () => [
            'name' => fake()->sentence(3) . 'png',
            'filename' => $this->generateImage($storagePath)
        ]);
    }
}
