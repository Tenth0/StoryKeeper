<?php

namespace App\Repository\Item;

use App\Models\Item;
use App\Repository\BaseRepository;
use Illuminate\Support\Facades\DB;

class ItemRepository extends BaseRepository implements ItemRepositoryInterface {

    public function getModel()
    {
        return Item::class;
    }

    public function list($searchQuery)
    {
        $data = $this->model->select('*');
        // if (!empty($searchQuery['search_text'])) {
        //     $data = $data->where('title', 'LIKE', '%' . $searchQuery['search_text'] . '%');
        // }
        // if (!empty($searchQuery['select_category'])) {
        //     $data = $data->where('category_id' , '=' , $searchQuery['select_category']);
        // }
        // return $data->orderBy('order')->get();
        return $data;
    }

    public function updateData(array $data, $id)
    {
        /*
        $Item = $this->find($id);
        unset($data['_token']);
        if (!$Item) {
            return null;
        }
        foreach ($data as $key => $value) {
            $Item[$key] = $value;
        }

        $Item->plusSave();

        return $Item;
        */
    }

}