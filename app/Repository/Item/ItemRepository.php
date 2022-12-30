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
    public function InsertItem($request)
    {
        // // リクエストからデータを取得
        // $data = $request->only(['title', 'body']);
        // // 新しい投稿を作成して保存
        // $Item = new Item();
        // $Item->title = $data['title'];
        // $Item->body = $data['body'];
        // $Item->save();
        // 
        // // 保存された投稿の情報をリクエストのレスポンスとして返す
        // return response()->json($Item, 201);
    }   
}