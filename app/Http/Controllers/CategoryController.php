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
        return Inertia::render('CategoryTable',[
            'categories' => $this->CategoryService->list(),
        ]);
    }

    public function insertCategory(CategoryRequest $request)
    {
        $category = $this->CategoryService->insertCategory($request);
        return $category;
    }

    public function create(CategoryRequest $request)
    {
        Category::InsertCategory($request);
        return redirect()->route('categoryList');
    }
    
    public function updateCategory(UpdateCategoryRequest $request)
    {
        $id = $request->input('id');
        $title = $request->input('title');
        if (!$this->CategoryService->updatedCategory($id,$title)) {
            return redirect()->route('categoryList')->with("record_not_exist", __("Record not exist"));
        }
        return redirect()->route('categoryList')->with("update_success", __("Update success"));
    }

    public function deleteCategory(Request $request)
    {
        $id = $request->input('id');
        if (!$this->CategoryService->deleteCategory($id)) {
            return redirect()->route('categoryList')->with("record_not_exist", __("Record not exist"));
        }
        return redirect()->route('categoryList')->with("create_success", __("Create success"));
    }
}
