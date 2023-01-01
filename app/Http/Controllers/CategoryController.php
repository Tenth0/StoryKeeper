<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\CategoryRequest;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Service\Category\CategoryServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    private $CategoryService;

    public function __construct(CategoryServiceInterface $CategoryService)
    {
        $this->CategoryService = $CategoryService;
    }

    public function list()
    {
        return Inertia::render('category_table',[
            'categories' => $this->CategoryService->list(),
        ]);
    }

    public function insertCategory(CategoryRequest $request)
    {
        $category = $this->CategoryService->insertCategory($request);
        return Inertia::render('categoryList');
    }

    public function create(CategoryRequest $request)
    {
        $insertCategory = Category::InsertCategory($request);
        return redirect()->route('categoryList');
    }
    
    public function update($id, UpdateCategoryRequest $request)
    {
        $updateUnit = Category::UpdateCategory($id, $request);
        return redirect()->route('categoryList')->with("create_success", __("Create success"));
    }

    public function deleteCategory($id)
    {
        if (!$this->CategoryService->deleteCategory($id)) {
            return redirect()->route('categoryList')->with("record_not_exist", __("Record not exist"));
        }
        return redirect()->route('categoryList')->with("create_success", __("Create success"));
    }
}
