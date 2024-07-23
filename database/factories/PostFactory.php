<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str as Str;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $user_id = 1;
        $title = $this->faker->sentence;
        $body = $this->faker->text(3000);
        $slug = Str::slug($title);
        //this converts a text into a "minusulas"(xd) chain
        //separated by "guiones"(xd)2

        return [
            "user_id" => 1,
            "title" => $title,
            "body" => $body,
            "slug" => $slug,
        ];
    }
}
