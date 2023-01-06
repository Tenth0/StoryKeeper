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
            $item = Item::select(
                'items.id',
                'items.title',
                'items.comment',
                'items.read_time',
                'items.is_favorite',
                'categories.title as category_title',
                'categories.color',
            )
            ->where('items.is_delete',0)
            ->leftJoin('categories','items.category_id','=','categories.id')
            ->get();
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
            $item = Item::select(
                'items.id',
                'items.title',
                'items.comment',
                'items.read_time',
                'items.is_favorite',
                'categories.title as category_title',
                'categories.color',
            )
            ->where('items.is_delete',0)
            ->leftJoin('categories','items.category_id','=','categories.id')
            ->find($id);
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
    
    public function updateItem($request)
    {
        DB::beginTransaction();
        $id = $request->input('id');
        $comment = $request->input('comment');
        try {
            $item = Item::find($id);
            $item->comment = $comment;
            $item->save();
            DB::commit();
            return $item;
        } catch(Exception $e) {
            Log::error('コメント編集中にエラーが発生しました');
            Log::error($e);
            DB::rollBack();
            return null;
        }

    }
}