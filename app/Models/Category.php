<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\ModelTrait;

class Category extends Model
{
    use HasFactory;
    use ModelTrait;
    public $primaryKey = 'id';
    public $timestamps = true;
    protected $table = 'categories';
    protected $fillable = [
        'id',
        'title',
        'color'
    ];

    public function InsertCategory($request)
    {
        return self::create([
            'title' => $request->title,
            'color' => $request->color,
            'created_at' => date('Ymd'),
            'updated_at' => date('Ymd'),
        ]);
    }

    public function UpdateCategory( $id , $request)
    {
        return self::where('id', '=', $id )->update([
            'title' => $request->title,
            'color' => $request->color,
            'created_at' => date("Ymd"),
            'updated_at' => date("Ymd"),
        ]);
    }

}
