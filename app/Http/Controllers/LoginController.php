<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller{

    public function getLogin(){
        
        return Inertia::render('Login2');
    }


               
}
