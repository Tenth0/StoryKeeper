<?php

namespace App\Repository\Item;

use App\Models\Item;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Http\Resources\ItemResource;
use Inertia\Inertia;
use App\Repository\Base\BaseRepositoryInterface;
use App\Utils;
use Illuminate\Support\Facades\DB;

interface ItemRepositoryInterface extends BaseRepositoryInterface 
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index();

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create();

    public function store(StoreItemRequest $request);

    public function show(Item $Item);

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Item  $Item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $Item);

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateItemRequest  $request
     * @param  \App\Models\Item  $Item
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateItemRequest $request, Item $Item);

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Item  $Item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $Item);
}
