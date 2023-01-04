<?php

namespace App\Service\Item;

use App\Models\Item;

interface ItemServiceInterface {
    public function list();
    
    public function searchList($searchQuery);
    
    public function insertItem($request);

    public function deleteItem($request);

    public function changeIsFavorite($request);
}
