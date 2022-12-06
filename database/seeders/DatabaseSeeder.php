<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $Usuario1 = \App\Models\User::create([
            'name' => 'fats',
            'email' => 'ruben@gmail.com',
            'password' => bcrypt('password'),
        ]);
        $Usuario2 = \App\Models\User::create([
            'name' => 'rubenx',
            'email' => 'ruben@gmail.com',
            'password' => bcrypt('password'),
        ]);
        $Usuario3 = \App\Models\User::create([
            'name' => 'Malva',
            'email' => 'ruben@gmail.com',
            'password' => bcrypt('password'),
        ]);
        $Usuario4 = \App\Models\User::create([
            'name' => 'elAnibals',
            'email' => 'ruben@gmail.com',
            'password' => bcrypt('password'),
        ]);
        $Usuario5 = \App\Models\User::create([
            'name' => 'Davicho',
            'email' => 'ruben@gmail.com',
            'password' => bcrypt('password'),
        ]);

        $proyecto1 = \App\Models\User::create([
            'name' => 'Project-organizer',
            'url' => 'https://github.com/elAnibals/project-organizer'
        ]);

        $proyecto2 = \App\Models\User::create([
            'name' => 'Huastec Lock',
            'url' => 'https://github.com/elAnibals/project-organizer'
        ]);

        $proyecto3 = \App\Models\User::create([
            'name' => 'Proyecto random',
            'url' => 'https://github.com/elAnibals/project-organizer'
        ]);

        
    }
}
