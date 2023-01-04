<?php

namespace App\Repository\Item;

use App\Models\Item;
use App\Repository\BaseRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ItemRepository extends BaseRepository implements ItemRepositoryInterface {

    public function getModel()
    {
        return Item::class;
    }

    public function searchList($searchQuery)
    {
        $data = $this->model->select(
            'id',
            'title',
            'category_id',
            'filename',
            'comment',
            'read_time',
            'order',
            'is_favorite',
        );
        if (!empty($searchQuery['title_keyword'])) {
            Log::debug($searchQuery['title_keyword']);
            $data = $data->where('title', 'LIKE', '%' . $searchQuery['title_keyword'] . '%');
        }
        if (!empty($searchQuery['select_category'])) {
            Log::debug($searchQuery['select_category']);
            $data = $data->where('category_id' , '=' , $searchQuery['select_category']);
        }
        return $data->get();
        // return $data->orderBy('order')->get();
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
    public function insertItem($request)
    {

        $validatedItem = $request->validate([
            'title' => 'required|string',
            'category_id' => 'nullable|integer',
            'filename' => 'nullable|string',
            'comment' => 'nullable|string',
            'read_time' => 'nullable|date',
        ]);

        $item = Item::create($validatedItem);

        $item->save();
        return response()->json([
            'title' => $item->title,
        ],201);
    }   
}