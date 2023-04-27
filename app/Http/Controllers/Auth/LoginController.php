<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    public function login(LoginRequest $request){
        $request = $request->validated();
        
        if (!Auth::attempt($request)) {
            return response([
                'errors' => 'The Provided credentials are not correct'
            ], 422);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request){
        $user = Auth::user();
        // Revoke the token that was used to authenticate the current request...

        return response([
            'success' => true,
            'user' => $user
        ]);
    }
}
