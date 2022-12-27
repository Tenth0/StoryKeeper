<?php

namespace App\Repository;

interface BaseRepositoryInterface
{
    /**
     * Get all records.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all();

    /**
     * Find a record by its primary key.
     *
     * @param  mixed  $id
     * @param  array  $columns
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function find($id, $columns = ['*']);

    /**
     * Create a new record.
     *
     * @param  array  $attributes
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create(array $attributes);

    /**
     * Update a record by its primary key.
     *
     * @param  mixed  $id
     * @param  array  $attributes
     * @param  array  $options
     * @return int
     */
    public function update($id, array $attributes, array $options = []);

    /**
     * Delete a record by its primary key.
     *
     * @param  mixed  $id
     * @return int
     */
    public function delete($id);
}