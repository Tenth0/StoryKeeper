<?php

namespace App\Repository\Item;

use App\Repository\BaseRepositoryInterface;

interface ItemRepositoryInterface extends BaseRepositoryInterface 
{
    public function list($searchQuery);

    public function updateData(array $data, $id);
}
