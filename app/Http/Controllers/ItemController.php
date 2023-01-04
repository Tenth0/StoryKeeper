<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Http\Requests\ItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Service\Item\ItemServiceInterface;
use App\Service\Category\CategoryServiceInterface;
use Illuminate\Http\Request;
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

    public function list()
    {
        return Inertia::render('index',[
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
        $Item = $this->ItemService->insertItem($request);
        return $Item;
    }

    public function insertFormItem()
    {
        return Inertia::render('insert_item',[
            'categories' => $this->CategoryService->list(),
        ]);
    }

    public function store(Request $request)
    {
        $this->ItemService->insertItem($request);
        return redirect()->route('insertFormItem')->with("create_success", __("Create success"));
    }
    
    public function update($id, UpdateItemRequest $request)
    {
        $updateUnit = Item::UpdateItem($id, $request);
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
}
