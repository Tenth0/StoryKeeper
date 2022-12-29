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

    public function InsertItem($request)
    {
        return self::create([
            'created_at' => date('Ymd'),
            'updated_at' => date('Ymd'),
            'title' => $request->title,
            'category_id' => $request->category_id,
            'filename' => $request->filename,
            'comment' => $request->comment,
            'read_time' => $request->read_time,
        ]);
    }

    /**
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function details()
    {
        return $this->hasMany(Category::class, 'id', 'category_id');
    }
}
