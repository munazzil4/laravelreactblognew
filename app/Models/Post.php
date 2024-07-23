<?php

namespace App\Models;

//eloquent-slugable
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    use Sluggable;

    //we are making a massive asignation so we need this config
    protected $fillable=[
        'title', 'body', 'iframe', 'image', 'user_id'
    ];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            "slug" => [
                "source" => "title",
                "onUpdate" => true,
                //when title updates the slug updates
            ],
        ];
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function comment()
    {
        return $this->hasMany(Comment::class);
    }
    public function getGetImageAttribute(){
        //if this->image is has a different name it won't work we need to
        //have exactly the same name as the methor's name after "Get"
        if($this->image){
            return url("storage/$this->image");
            //first we needt o do php artisan storage:link
        }
    }
}
