<?php

namespace App\Service\Category;

use App\Models\Category;

interface CategoryServiceInterface {
    public function list();

    public function insertCategory($request);

    public function deleteCategory($id);
}
