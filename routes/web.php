<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

/* Auth */
Auth::routes();
/*      */

Route::get('/', [ItemController::class,'router'])->name('itemList');

/* Item */
Route::get('/items', [ItemController::class,'list'])->name('itemList');
Route::get('/items/search', [ItemController::class,'searchList'])->name('searchItemList');
Route::post('/items/delete', [ItemController::class,'deleteItem'])->name('delete_category');
Route::post('/items/change_isFavorite', [ItemController::class,'changeIsFavorite'])->name('change_isFavorite');
Route::get('/insert_item', [ItemController::class,'insertFormItem'])->name('insertFormItem');
Route::post('/api/insert_item', [ItemController::class,'insertItem'])->name('insertItem');
Route::post('/items/update', [ItemController::class,'update'])->name('update_item');

/* Category */
Route::get('/category_table', [CategoryController::class,'list'])->name('categoryList');
Route::post('/categories/insert', [CategoryController::class,'insertCategory'])->name('insert_category');
Route::post('/categories/delete', [CategoryController::class,'deleteCategory'])->name('delete_category');
Route::post('/categories/update', [CategoryController::class,'updateCategory'])->name('update_category');
