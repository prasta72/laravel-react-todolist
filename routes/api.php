<?php

use App\Http\Controllers\KontakController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/kontak', KontakController::class);


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/registrasi', [\App\Http\Controllers\Auth\RegisterController::class ,'register']);
    Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class ,'login']);
    Route::post('/logout', [\App\Http\Controllers\Auth\LoginController::class ,'logout']);
});