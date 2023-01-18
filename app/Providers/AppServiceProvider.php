<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Service\Item\ItemService;
use App\Service\Item\ItemServiceInterface;
use App\Service\Category\CategoryService;
use App\Service\Category\CategoryServiceInterface;
use \App\Repository\Item\ItemRepository;
use \App\Repository\Item\ItemRepositoryInterface;
use \App\Repository\Category\CategoryRepository;
use \App\Repository\Category\CategoryRepositoryInterface;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ItemServiceInterface::class, ItemService::class);
        $this->app->bind(CategoryServiceInterface::class, CategoryService::class);
        $this->app->bind(ItemRepositoryInterface::class, ItemRepository::class);
        $this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // 文字数の上限
        Schema::defaultStringLength(191);
    }
}
