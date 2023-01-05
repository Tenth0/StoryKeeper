<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\ModelTrait;
use Carbon\Carbon;

class Category extends Model
{
    use HasFactory;
    use ModelTrait;
    public $primaryKey = 'id';
    public $timestamps = true;
    protected $table = 'categories';
    protected $fillable = [
        'title',
        'color'
    ];
    protected $hidden = ['created_at','updated_at','is_delete'];

    public function insertCategory($request)
    {
        return self::create([
            'title' => $request->title,
            'color' => $request->color,
            'created_at' => Carbon::now()->format('Ymd'),
            'updated_at' => Carbon::now()->format('Ymd'),
        ]);
    }

    public function updateCategory($request)
    {
        $category = self::find($request->id);
        if ($category) {
            $category->title = $request->title;
            $category->color = $request->color;
            $category->updated_at = Carbon::now()->format('Ymd');
            $category->save();
        }
        return $category;
    }
}
