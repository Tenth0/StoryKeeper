<?php

namespace App\Repository\Item;

use App\Models\Item;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Http\Resources\ItemResource;
use Inertia\Inertia;
use App\Repository\BaseRepositoryInterface;
use App\Utils;
use Illuminate\Support\Facades\DB;

interface ItemRepositoryInterface extends BaseRepositoryInterface 
{
    
}
