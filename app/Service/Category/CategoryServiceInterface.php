<?php

namespace App\Service\Category;

use App\Models\Category;

interface CategoryServiceInterface {
    public function list($searchQuery);
}
