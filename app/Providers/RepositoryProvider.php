<?php

namespace App\Providers;

use App\Repository\Category\CategoryRepository;
use App\Repository\Category\CategoryRepositoryInterface;
use App\Repository\Item\ItemRepository;
use App\Repository\Item\ItemRepositoryInterface;
use App\Repository\BaseRepositoryInterface;
use App\Repository\BaseRepository;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class RepositoryProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(BaseRepositoryInterface::class, BaseRepository::class);
        $this->app->singleton(CategoryRepositoryInterface::class, CategoryRepository::class);
        $this->app->singleton(ItemRepositoryInterface::class, ItemRepository::class);
        // $this->app->singleton(BaseRepositoryInterface::class, BaseRepository::class);
        // $this->app->singleton(CategoryRepositoryInterface::class, CategoryRepository::class);
        // $this->app->singleton(ItemRepositoryInterface::class, ItemRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}