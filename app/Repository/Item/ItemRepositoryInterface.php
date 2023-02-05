<?php

namespace App\Repository\Item;

use App\Repository\BaseRepositoryInterface;

interface ItemRepositoryInterface extends BaseRepositoryInterface 
{
    public function searchList($searchQuery);

    public function insertItem($request);
}
