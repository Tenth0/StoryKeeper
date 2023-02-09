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

    public function searchList($searchQuery)
    {
        $data = $this->model->select(
            'items.id',
            'items.title',
            'items.comment',
            'items.read_time',
            'items.is_favorite',
            'categories.title as category_title',
            'categories.color',
        )
        ->leftJoin('categories','items.category_id','=','categories.id')
        ->where('items.is_delete',0);
        if (!empty($searchQuery['title_keyword'])) {
            $data = $data->where('items.title', 'LIKE', '%' . $searchQuery['title_keyword'] . '%');
        }
        if (!empty($searchQuery['select_category'])) {
            $data = $data->where('categories.id' , '=' , $searchQuery['select_category']);
        }
        if ($searchQuery['is_favorite'] == 'true') {
            $data = $data->where('items.is_favorite', '=' , True);
        }
        $data = $data->orderBy('categories.updated_at');
        return $data->get();
    }

    public function insertItem($request)
    {
        $item = Item::create($request);
        $item->save();
        return response()->json([
            'title' => $item->title,
            'category_id' => $item->category_id
        ],201);
    }   
}