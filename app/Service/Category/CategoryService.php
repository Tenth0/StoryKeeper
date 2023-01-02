<?php

namespace App\Service\Category;

use App\Models\Item;
use App\Models\Category;
use App\Repository\Item\ItemRepositoryInterface;
use App\Repository\Category\CategoryRepositoryInterface;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

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
        $category = $this->CategoryRepo->insertCategory($request);
        return $category;
    }
    
    public function deleteCategory($id)
    {
        return $this->CategoryRepo->delete($id);
    }

    public function updatedCategory($id,$title)
    {
        try {
            DB::beginTransaction();
            
            $category = Category::select('*')->where('id',$id)->first();
            if(!$category) {
                return null;
            }
            $category->title = $title;
            $category->save();
            DB::commit();
            return $category;
        } catch(Exception $e) {
            Log::error('カテゴリー更新時にエラーが発生しました');
            Log::error($e);
            DB::rollBack();

            return null;
        }
    }
}