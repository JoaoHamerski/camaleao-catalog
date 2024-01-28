<?php

namespace Database\Factories;

use Domains\Category\Models\Category;
use Domains\Uniform\Models\Uniform;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\Domains\Uniform\Models\Uniform>
 */
class UniformFactory extends Factory
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
            'category_id' => Category::inRandomOrder()->first()->id,
            'images' => [$this->storeImage(), $this->storeImage(), $this->storeImage()]
        ];
    }

    /**
     *
     * @return array<string,int>
     */
    public function storeImage()
    {
        $filename = $this->generateImage();

        return [
            'name' => fake()->sentence(3) . 'png',
            'filename' => $filename
        ];
    }

    /**
     *
     * @return string
     */
    public function generateImage(): string
    {
        $sizes = $this->getImageSizes();

        $storagePath =  './storage/app/' . Uniform::getStoragePath('images');

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
