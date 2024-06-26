<?php

namespace Domains\DashboardUniform\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UniformStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'category' => ['required', 'exists:categories,id'],
            'images' => ['array', 'required'],
            'images.*' => ['required', 'file', 'extensions:jpg,png', 'mimes:jpg,png', 'max:300']
        ];
    }

    public function messages(): array
    {

        return [
            'images.*.max' => 'Tamanho máximo por arquivo: 300kB'
        ];
    }
}
