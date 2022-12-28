<?php

namespace App\Service\Item;

use App\Models\Item;
use App\Models\Category;
use App\Repository\Category\CategoryRepositoryInterface;
use App\Repository\Item\ItemRepositoryInterface;
use App\Utils;
use Illuminate\Support\Facades\DB;
use PDO;
use PDOException;
use Log;


class ItemService implements ItemServiceInterface {

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
    public function list($searchQuery){
        return $this->ItemRepo->list($searchQuery);
    }
}