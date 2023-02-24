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

}
