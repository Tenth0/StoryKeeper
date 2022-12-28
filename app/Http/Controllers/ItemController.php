<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Http\Resources\ItemResource;
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
        $categories = Item::all();
        $CategoriesResource = ItemResource::collection($categories);
        return $CategoriesResource;
        /*
        return Inertia::render('/',[
            'categories' => Item::all()
        ]);
        */
    }
}
