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

Route::get('/', [ItemController::class,'index'])->name('index');
Route::get('/add_item', [ItemController::class,'addItem'])->name('addItem');
Route::get('/api/add_item', [ItemController::class,'store'])->name('create');
Route::get('/category_table', function () {return Inertia::render('category_table');})->name('categoryTable');