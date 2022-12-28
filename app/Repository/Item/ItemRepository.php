<?php

namespace App\Repository\Item;


use App\Repository\BaseRepository;
// use App\Utils;
use Illuminate\Support\Facades\DB;
use mysql_xdevapi\Exception;

class ItemRepository extends BaseRepository implements ItemRepositoryInterface {

    public function getModel()
    {
        return Item::class;
    }

    public function list($searchQuery)
    {
        $data = $this->model
        ->select('*');
        /*
        if (!empty($searchQuery['search_text'])) {
            $searchText = Utils::replaceTextSearch($searchQuery['search_text']);
            $data = $data->where('Item_CTG', 'LIKE', '%' . $searchText . '%');
        }
        if (!empty($searchQuery['price_Item'])) {
            $data = $data->where('Item_KUJ_CTG' , '=' , $searchQuery['price_Item']);
        }
        */
        return $data->orderBy('order')->get();
    }

    public function updateData(array $data, $id)
    {
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
    }

}