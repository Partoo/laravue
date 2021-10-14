<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/m/{any}', function () {
    return view('app');
})->where('/m/any', '.*');
