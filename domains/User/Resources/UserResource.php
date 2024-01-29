<?php

namespace Domains\User\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'email' => $this->email,
            'state' => $this->city ? $this->city->state : null,
            'birth_date' => $this->birth_date
                ? Carbon::createFromFormat('Y-m-d', $this->birth_date)->format('d/m/Y')
                : null,
            'phone' => $this->phone,
            'city' => $this->city,
            'permissions' => $this->when(
                $this->has_roles,
                $this->getAllPermissions()->pluck('name')
            ),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
