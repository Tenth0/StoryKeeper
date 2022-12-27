<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' =>$this->id,
            'title' =>$this->title,
            'category_id' =>$this->category_id,
            'filename' =>$this->filename,
            'comment' =>$this->comment,
            'read_time' =>$this->read_time,
            'order' =>$this->order,
            'is_delete' =>$this->is_delete,
        ];
    }
}
