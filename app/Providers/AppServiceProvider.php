<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Service\Item\ItemService;
use App\Service\Item\ItemServiceInterface;
use App\Service\Category\CategoryService;
use App\Service\Category\CategoryServiceInterface;

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
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
