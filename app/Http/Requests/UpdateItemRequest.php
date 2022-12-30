<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateItemRequest extends FormRequest
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
        //新規登録か更新かでコードの重複判定を分ける
        if( empty( $this->id ) === TRUE ){
            //新規
            return [
                'id' =>'nullable|max:10|unique:items,id',
                'title' => 'required|string',
                'category_id' => 'required|integer',
                'filename' => 'nullable|string',
                'comment' => 'nullable|string',
                'read_time' => 'nullable|date',
            ];
          } else {
            //更新（自身のレコードIDはバリデーションチェック時に除外指定）
            return [
                'id'       => ['nullable', 'max:10', 'unique:items,id,'.$this->id],
                'title' => 'required|string',
                'category_id' => 'required|integer',
                'filename' => 'nullable|string',
                'comment' => 'nullable|string',
                'read_time' => 'nullable|date',
            ];
          }
    }
}
