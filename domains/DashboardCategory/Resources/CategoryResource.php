<?php

namespace Domains\DashboardCategory\Resources;

use Domains\Shared\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class CategoryResource extends JsonResource
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
            'image' => [
                'name' => $this->when(
                    Auth::user()->can(Permission::ACCESS_ADMIN_PANEL),
                    $this->image['name']
                ) ,
                'url' => $this->getFilePublicUrl('image')
            ]
        ];
    }
}
