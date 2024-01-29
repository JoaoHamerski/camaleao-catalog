<?php

namespace Database\Factories;

use Domains\Category\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\Domains\Category\Models\Category>
 */
class CategoryFactory extends BaseFactory
{
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'image' => $this->getImage()
        ];
    }

    /**
     *
     * @return array<string,int>
     */
    public function getImage()
    {
        $storagePath = 'storage/app/' . Category::getStoragePath('image');

        return [
            'name' => fake()->sentence(3) . 'png',
            'filename' => $this->generateImage($storagePath)
        ];
    }
}
