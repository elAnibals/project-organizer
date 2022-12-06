<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;



class HomeController extends Controller
{
    public function getHome(){
        $user = Auth::user();
        $projects = DB::table('members')
        ->select('members.project_id','members.rol', 'projects.name')
        ->join('projects','members.project_id','=','projects.id')
        ->where('user_id',$user->id)
        ->get();

        return Inertia::render('Home',[
            'projects'=>$projects,
            'username'=>$user->name

        ]);
    }
}
