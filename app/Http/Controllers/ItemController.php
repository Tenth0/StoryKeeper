<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Http\Requests\ItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Service\Item\ItemServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    private $ItemService;

    public function __construct(ItemServiceInterface $ItemService)
    {
        $this->ItemService = $ItemService;
    }

    public function list(Request $request)
    {
        $searchQuery = [
            'search_text' => is_null($request->search_text) ? null : $request->search_text,
            'select_category' => is_null($request->category) ? null : $request->category,
        ];
        
        return Inertia::render('index',[
            'items' => $this->ItemService->list($searchQuery),
        ]);
    }

    public function insertItem($request)
    {
        $Item = $this->ItemService->insertItem($request);
        return $Item;
    }

    public function create(ItemRequest $request)
    {
        $insertItem = Item::InsertItem($request);
        return redirect()->route('insertItem');
    }

    public function store(Request $request)
    {
        $this->ItemService->insertItem($request);
        return redirect()->route('insertItem')->with("create_success", __("Create success"));
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
