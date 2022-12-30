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

    public function index(Request $request)
    {
        $searchQuery = [
            'search_text' => is_null($request->search_text) ? null : $request->search_text,
            'select_category' => is_null($request->category) ? null : $request->category,
        ];
        
        return Inertia::render('index',[
            'Items' => $this->ItemService->list($searchQuery),
        ]);
    }

    public function insertItem()
    {
        return Inertia::render('insert_item');
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
        return redirect()->route('index')->with("create_success", __("Create success"));
    }

    public function delete($id)
    {
        Item::where('id', '=', $id)->delete();
        return redirect()->route('index')->with("create_success", __("Create success"));
    }
}
