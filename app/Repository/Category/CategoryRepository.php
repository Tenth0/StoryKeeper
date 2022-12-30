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
        ->select('*');
    
        /*
        if (!empty($searchQuery['search_text'])) {
            $searchText = Utils::replaceTextSearch($searchQuery['search_text']);
            $data = $data->where('title', 'LIKE', '%' . $searchText . '%');
        }

        if (!empty($searchQuery['price_category'])) {
            $data = $data->where('Category_KUJ_CTG' , '=' , $searchQuery['price_category']);
        }
        */

        return $data;
    }

    public function updateData(array $data, $id)
    {
        // $Category = $this->find($id);
        // unset($data['_token']);
        // if (!$Category) {
        //     return null;
        // }
        // foreach ($data as $key => $value) {
        //     $Category[$key] = $value;
        // }
// 
        // $Category->plusSave();
// 
        // return $Category;
    }

    public function insertCategory($request)
    {

        $validatedCategory = $request->validate([
            'title' => 'required|string',
            'color' => 'required|string',
        ]);

        $Category = Category::create($validatedCategory);

        $Category->save();
        return response()->json($Category, 201);
    }   

}