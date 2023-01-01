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

Route::get('/', [ItemController::class,'list'])->name('itemList');
Route::get('/insert_item', [ItemController::class,'insertItem'])->name('insertItem');
Route::post('/api/insert_item', [ItemController::class,'store'])->name('createItem');
Route::get('/category_table', [CategoryController::class,'list'])->name('categoryList');
Route::post('/category_table/insert_category', [CategoryController::class,'insertCategory'])->name('insert_category');
Route::post('/category_table/delete_category', [CategoryController::class,'deleteCategory'])->name('delete_category');