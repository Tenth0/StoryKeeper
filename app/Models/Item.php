<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\ModelTrait;

class Item extends Model
{
    use HasFactory;
    use ModelTrait;
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
            'filename' => $request->filename,
            'title' => $request->title,
            'category_id' => $request->category_id,
            'read_time' => $request->read_time,
            'comment' => $request->comment,
        ]);
    }

    public function UpdateItem( $id , $request)
    {
        return self::where('id', '=', $id )->update([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'filename' => $request->filename,
            'comment' => $request->comment,
            'read_time' => $request->read_time,
            'created_at' => date("Ymd"),
            'updated_at' => date("His"),
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
