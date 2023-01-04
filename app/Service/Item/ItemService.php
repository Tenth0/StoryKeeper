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
        $data = Item::all();
        return $data;
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
            Log::debug($item);
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