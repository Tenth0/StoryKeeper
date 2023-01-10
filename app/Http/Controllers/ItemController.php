<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Http\Requests\ItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Service\Item\ItemServiceInterface;
use App\Service\Category\CategoryServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ItemController extends Controller
{
    private $ItemService;
    
    private $CategoryService;

    public function __construct(ItemServiceInterface $ItemService,CategoryServiceInterface $CategoryService)
    {
        $this->ItemService = $ItemService;
        $this->CategoryService = $CategoryService;
    }

    public function router()
    {
        return Inertia::render('Index',[
            'items' => $this->ItemService->list(),
            'categories' => $this->CategoryService->list(),
        ]);
    }

    // いらんかも
    public function list()
    {
        return Inertia::render('Items',[
            'items' => $this->ItemService->list(),
            'categories' => $this->CategoryService->list(),
        ]);
    }
    public function searchList(Request $request)
    {
        $searchQuery = [
            'title_keyword' => is_null($request->title_keyword) ? null : $request->title_keyword,
            'select_category' => is_null($request->select_category) ? null : $request->select_category,
        ];
        $items = $this->ItemService->searchList($searchQuery);
        
        return $items;
    }
    
    public function insertItem(ItemRequest $request)
    {
        $comment = $request->comment;
        if($comment == null) {
            $comment = "";
        }

        $itemData = [
            'title' => $request->title,
            'category_id' => $request->category_id,
            'read_time' => $request->read_time,
            'comment' => $comment,
        ];
    
        $Item = $this->ItemService->insertItem($itemData); // 配列を create メソッドの引数として渡す
        return $Item;
    }
    

    public function insertFormItem()
    {
        return Inertia::render('InsertItem',[
            'categories' => $this->CategoryService->list(),
        ]);
    }

    public function store(Request $request)
    {
        $this->ItemService->insertItem($request);
        return redirect()->route('insertFormItem')->with("create_success", __("Create success"));
    }
    
    public function update(UpdateItemRequest $request)
    {
        $comment = $request->comment;
        if($comment == null) {
            $comment = "";
        }

        $newComment = [
            'id' => $request->id,
            'comment' => $comment
        ];

        $updateUnit = $this->ItemService->updateItem($newComment);
        return redirect()->route('itemList')->with("create_success", __("Create success"));
    }

    public function deleteItem(Request $request)
    {
        $id = $request->input('id');
        if (!$this->ItemService->deleteItem($id)) {
            return redirect()->route('itemList')->with("record_not_exist", __("Record not exist"));
        }
        return redirect()->route('itemList')->with("create_success", __("Create success"));
    }

    public function changeIsFavorite(Request $request)
    {
        $item = $this->ItemService->changeIsFavorite($request);
        return $item;
    }
}
