<?php

namespace App\Service\Item;

use App\Models\Item;

interface ItemServiceInterface {
    public function list($searchQuery);
}
