<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\ModelTrait;
use Carbon\Carbon;

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
        'read_time',
        'order',
        'comment'
    ];

    public function InsertItem($request)
    {
        return self::create([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'read_time' => $request->read_time,
            'comment' => $request->comment,
            'created_at' => Carbon::now()->format('Ymd'),
            'updated_at' => Carbon::now()->format('Ymd'),
        ]);
    }

    public function UpdateItem( $id , $request)
    {
        return self::where('id', '=', $id )->update([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'comment' => $request->comment,
            'read_time' => $request->read_time,
            'created_at' => Carbon::now()->format('Ymd'),
            'updated_at' => Carbon::now()->format('Ymd'),
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
