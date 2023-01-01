<?php

namespace App\Service\Category;

use App\Models\Item;
use App\Models\Category;
use App\Repository\Item\ItemRepositoryInterface;
use App\Repository\Category\CategoryRepositoryInterface;
use Illuminate\Support\Facades\DB;


class CategoryService implements CategoryServiceInterface {

    private $ItemRepo;

    private $CategoryRepo;

    public const NOT_USE_FILED = [
        'id',
    ];

    public function __construct(
        ItemRepositoryInterface $ItemRepo,
        CategoryRepositoryInterface $CategoryRepo
    )
    {
        $this->ItemRepo = $ItemRepo;
        $this->CategoryRepo = $CategoryRepo;
    }

    public function list()
    {
        return $this->CategoryRepo->list();
    }

    public function insertCategory($request)
    {
        return $data = $this->CategoryRepo->insertCategory($request);
    }
    
    public function deleteCategory($id)
    {
        return $this->CategoryRepo->delete($id);
    }
}