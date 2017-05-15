<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

// should be rerouted to login system before allowing access to homepage
Route::get('/', 'HomeController@index')->name('home');

// Testing new pages
Route::get('contact', function () {
	return "<h3>Contact info goes here...</h3><br><p>Rather empty for now</p>";
});

Route::get('welcome', function () {
	return view('welcome');
});