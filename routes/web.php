<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {return Inertia::render('index');})->name('hello');
// Route::get('/pages', function () {return Inertia::render('index');})->name('hello2');
Route::get('/add_item', function () {return Inertia::render('add_item');})->name('hello3');