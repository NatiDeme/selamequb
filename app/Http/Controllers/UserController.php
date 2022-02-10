<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function get(){
        $pageLength = request('pageLength') ?? 10;
        $users = User::filtered();

        return response()->json($users->paginate($pageLength), 200);
       //return response()->json(user::all());

    }
}
