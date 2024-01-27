<?php

namespace Domains\DashboardUniform\Resources;

use Domains\DashboardCategory\Resources\CategoryResource;
use Domains\Shared\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class UniformResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'category' => new CategoryResource($this->category),
            'slug' => $this->slug,
            'images' => Arr::map($this->images, fn ($image, $index) => [
                'name' => $this->when(
                    Auth::user() && Auth::user()->can(Permission::ACCESS_ADMIN_PANEL),
                    $this->images[$index]['name']
                ) ,
                'url' => $this->getFilePublicUrl("images")[$index]
            ])
        ];
    }
}
