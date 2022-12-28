<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Item extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'items';
    public $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'id',
        'title',
        'category_id',
        'filename',
        'read_time',
        'order',
        'comment'
    ];

    /**
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function details()
    {
        return $this->hasMany(Category::class, 'id', 'category_id');
    }
}
