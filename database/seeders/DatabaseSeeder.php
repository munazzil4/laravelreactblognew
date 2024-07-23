<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $name = "andresdev";
        $nickname = "Andrés Gutierrez";
        $slug = Str::slug($name);
        $description =
            "Architecto qui earum qui distinctio ducimus laudantium maiores. Cupiditate sapiente vitae exercitationem eum beatae unde itaque. Pariatur nisi explicabo dolorum fugiat et. Esse sint non assumenda non et quos voluptas. Maxime accusamus et sint asperiores quae ipsa soluta. Voluptatibus iusto accusantium omnis neque. Reiciendis dolores laborum et. Voluptate sit voluptatem culpa iusto. Deleniti qui ipsum enim repellat saepe.";

        User::create([
            "name" => $name,
            "nickname" => $nickname,
            "description" => $description,
            "email" => "ahmed@admin.com",
            "password" => bcrypt("admin"),
            "profile_picture" => "/img/chris.png",
            "slug" => $slug,
        ]);
        Post::factory()
            ->count(24)
            ->create();

        Comment::factory()
            ->count(24)
            ->create();
    }
}
