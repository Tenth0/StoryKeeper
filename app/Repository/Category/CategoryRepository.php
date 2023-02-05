<?php

namespace App\Repository\Category;

use App\Models\Category;
use App\Repository\BaseRepository;
use Illuminate\Support\Facades\DB;

class CategoryRepository extends BaseRepository implements CategoryRepositoryInterface {

    public function getModel()
    {
        return Category::class;
    }

    public function list()
    {
        $data = $this->model
        ->select('id','title','color')->get();
        return $data;
    }

    public function insertCategory($request)
    {

        $validatedCategory = $request->validate([
            'title' => 'required|string',
            'color' => 'required|string',
        ]);

        $category = Category::create($validatedCategory);

        $category->save();
        return response()->json([
            'id' => $category->id,
            'title' => $category->title,
            'color' => $category->color,
        ],201);
    }   

}