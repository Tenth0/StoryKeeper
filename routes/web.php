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
// Route::get('/pages', function () {return Inertia::render('index');})->name('hello2');
Route::get('/add_item', function () {return Inertia::render('add_item');})->name('addItem');
Route::get('/add_category', function () {return Inertia::render('add_category');})->name('addCategory');