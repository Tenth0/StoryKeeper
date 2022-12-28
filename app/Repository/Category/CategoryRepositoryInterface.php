<?php

namespace App\Repository\Category;

use App\Repository\BaseRepositoryInterface;

interface CategoryRepositoryInterface extends BaseRepositoryInterface {

    public function list($searchQuery);

    public function updateData(array $data, $id);
}
