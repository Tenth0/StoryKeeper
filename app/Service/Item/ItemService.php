<?php

namespace App\Service\Item;

use App\Models\Item;
use App\Models\Category;
use App\Repository\Category\CategoryRepositoryInterface;
use App\Repository\Item\ItemRepositoryInterface;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


class ItemService implements ItemServiceInterface {

    private $ItemRepo;

    private $CategoryRepo;

    public const NOT_USE_FILED = [
        'id',
    ];

    public function __construct(
        ItemRepositoryInterface $ItemRepo,
        CategoryRepositoryInterface $CategoryRepo
    )
    {
        $this->ItemRepo = $ItemRepo;
        $this->CategoryRepo = $CategoryRepo;
    }
    public function list()
    {
        try {
            $item = Item::select('*')
            ->where('items.is_delete',0)
            ->leftJoin('categories','items.category_id','=','categories.id')
            ->get();
            Log::debug($item);
            return $item;
        } catch(Exception $e) {
            Log::error('アイテムを取得できませんでした');
            Log::error($e);
            DB::rollBack();
            return null;
        }
    }

    public function searchList($searchQuery)
    {
        $data = $this->ItemRepo->searchList($searchQuery);
        return $data;
    }

    public function insertItem($request)
    {
        $data = $this->ItemRepo->insertItem($request);
        return $data;
    }

    public function deleteItem($id)
    {
        return $this->ItemRepo->delete($id);
    }
    
    public function changeIsFavorite($request)
    {
        try {
            DB::beginTransaction();
            $id = $request->input('id');
            $isFavorite = $request->input('isFavorite');
            $item = Item::find($id);
            if($item['is_favorite']) { 
                $item->is_favorite = 0;
            } else {
                $item->is_favorite = 1;
            }
            $item->save();
            DB::commit();
            return $item;
        } catch(Exception $e) {
            Log::error('お気に入り更新時にエラーが発生しました');
            Log::error($e);
            DB::rollBack();
            return null;
        }
    }
}