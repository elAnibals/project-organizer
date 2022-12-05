<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProjectController extends Controller{

    public function getProject($id){
        $project = DB::table('projects')
        ->where('id',$id)
        ->first();

        $sprints = DB::table('sprints')
        ->select('sprints.*')
        ->where('project_id',$id)
        ->get();
        
        for ($i = 0; $i < count($sprints); $i++){
            $sprints[$i]->backlog=
            DB::table('epic')
            ->where('sprint_id',$sprints[$i]->id)
            ->get();
        }

        for ($i = 0; $i < count($sprints); $i++){
            for ($j = 0; $j < count($sprints[$i]->backlog); $j++){
                $id_epic=$sprints[$i]->backlog[$j]->id;
                $sprints[$i]->backlog[$j]->histories=
                DB::table('histories')
                ->where('epic_id',$id_epic)
                ->get();
            }
        }

        $members = DB::table('members')
        ->select('members.id','members.user_id','members.project_id','members.rol','users.name')
        ->join('users','members.user_id','=','users.id')
        ->where('project_id',$id)
        ->get();

        return Inertia::render('Dashboard',[
            'project'=>[
                'id'=>$project->id,
                'name'=>$project->name,
                'url'=>$project->url,
                'sprints'=>$sprints,
                'members'=>$members
            ]
        ]);
    }
}