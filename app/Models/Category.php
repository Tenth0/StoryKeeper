<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
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
            'created_at' => date('Ymd'),
            'updated_at' => date('Ymd'),
            'title' => $request->title,
            'color' => $request->color,
        ]);
    }

    public function UpdateCategory( $id , $request)
    {
        return self::where('id', '=', $id )->update([
            'created_at' => date("Ymd"),
            'updated_at' => date("His"),
            'title' => $request->title,
            'color' => $request->color,
        ]);
    }

}
