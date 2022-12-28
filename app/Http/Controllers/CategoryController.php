<?php

namespace App\Http\Controllers;

use App\Models\Category;
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

    public function index(Request $request)
    {
        $searchQuery = [
            'search_text' => is_null($request->search_text) ? null : $request->search_text,
        ];

        $categories = Category::all();
        return Inertia::render('/',[
            'categories' => CategoryResource::collection($categories),
        ]);
    }
}
