<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {return Inertia::render('hello-world');})->name('hello');
Route::get('/pages', function () {return Inertia::render('index');})->name('hello2');