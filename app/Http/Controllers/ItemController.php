<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Http\Requests\ItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Http\Resources\ItemResource;
use App\Service\Item\ItemServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

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

    public function create(ItemRequest $request)
    {
        $insertItem = Item::InsertItem($request);
        return redirect()->route('index');
    }
}
