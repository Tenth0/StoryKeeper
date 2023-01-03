<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CategoryController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

/* Item */
Route::get('/', [ItemController::class,'list'])->name('itemList');
Route::post('/items/delete', [ItemController::class,'deleteItem'])->name('delete_category');
Route::get('/insert_item', [ItemController::class,'insertFormItem'])->name('insertFormItem');
Route::post('/api/insert_item', [ItemController::class,'insertItem'])->name('insertItem');

/* Category */
Route::get('/category_table', [CategoryController::class,'list'])->name('categoryList');
Route::post('/categories/insert', [CategoryController::class,'insertCategory'])->name('insert_category');
Route::post('/categories/delete', [CategoryController::class,'deleteCategory'])->name('delete_category');
Route::post('/categories/update', [CategoryController::class,'updateCategory'])->name('update_category');
