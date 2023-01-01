<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'required|string',
            'category_id' => 'required|integer',
            'filename' => 'nullable|string',
            'comment' => 'nullable|string',
            'read_time' => 'nullable|date',
        ];
    }

    public function attributes()
    {
        return [
            'title' => 'タイトル',
            'category_id' => 'カテゴリー',
        ];
    }
}
