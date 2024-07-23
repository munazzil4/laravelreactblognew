<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;
use App\Models\User;
use Inertia\Inertia;

use function PHPSTORM_META\type;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    //


    public function post(string $author, int $id, string $post_slug)
    {
        $page_post = Post::where("id", "=", $id)->get();
        $post_author = User::where("id", "=", $page_post[0]->user->id)->get();
        $comments = Comment::where("post_id", "=", $id)->get();
        foreach($comments as $comment){
            $comment->user;
            //idk why this is here, if I don't do It users won't be loaded ._.
        }

        return Inertia::render('Post', [
            'author'=>$post_author[0],
            'post'=>$page_post[0],
            'comments'=>$comments,
            'user'=> Auth::user()
        ]);
    }

   /* public function user($userslug){ */
   /*    $posts =Post::with('user')->where("user_id", "=", $user->id)->get(); */

   /*    return Inertia::render('User', [ */
   /*        'user'=>$user, */
   /*        'posts' => $posts */
   /*    ]); */
   /* } */
   public function user($userslug)
    {
      $user = User::where("slug", "=", $userslug)->get()[0];
      $posts =Post::with('user')->where("user_id", "=", $user->id)->get();
        return Inertia::render('User', [
           'user'=>$user,
           'posts'=>$posts
        ]);
    }


   public function __invoke()
    {
        return Inertia::render('Home', [
           'user'=>Auth::user(),
           'posts'=>Post::with('user')->latest()->take(5)->get()
        ]);
    }

}
