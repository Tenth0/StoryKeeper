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

    public function list(Request $request)
    {
        $searchQuery = [
            'search_text' => is_null($request->search_text) ? null : $request->search_text,
            'select_category' => is_null($request->category) ? null : $request->category,
        ];
        
        return Inertia::render('index',[
            'items' => $this->ItemService->list($searchQuery),
            'categories' => $this->CategoryService->list(),
        ]);
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
