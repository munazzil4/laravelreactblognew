<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
/* use Illuminate\Support\Facades\Redirect as FacadesRedirect; */
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $posts = Post::with('user')->latest()->get();
        $token = csrf_token();
        return Inertia::render('Posts', [
            'user'=>Auth::user(),
            'posts'=>$posts,
            'csrf_token'=>$token
        ]);

    }

    public function create()
    {
        return Inertia::render('CreatePost', [
            'user'=>Auth::user(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        //
        $custom_request= $request->validate([
            //here are our validations
            'title' => "required",
            'body' => "required"
        ]);
        //
        $post = Post::create([
            'user_id' => auth()->user()->id,
            //we take the user from the login
        ] + $custom_request);

        //image
        if($request->file('file')){
            /*FIXME*/
            $post->image = $request->file('file')->store('posts', 'public');
            $post->save();
        }

        return back();
        //we create de status session var, in the login view, we send an alert
        //if it exists, so it will dispay this message, we can use that feature
        //as a Template in other views
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    /* public function show(Post $post) */
    /* { */
    /*     // */
    /* } */

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(int $id, string $post_slug)
    {
        //
        $post = Post::where("id", "=", $id)->get()[0];
        return Inertia::render('EditPost', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, Post $post)
    {
        //deleting the image and saving the new one
        $post_request = [
            'title'=> $request->title,
            'body' => $request->body
        ];

        $post->update($post_request);
        if($request->file('file')){
            Storage::disk('public')->delete($post->image);
            $post->image = $request->file('file')->store('posts', 'public');
            $post->save();
        }
        /* return Redirect::route('posts'); */
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        /* return back()->with('status', 'deleted successfully'); */
        /* $posts = Post::with('user')->latest()->get(); */
        /* $token = csrf_token(); */

        /* return Inertia::render('Posts', [ */
        /*     'posts'=>$posts, */
        /*     'csrf_token'=>$token */
        /* ]); */
        return back();
        //try to put your button in a form idk
    }
}
