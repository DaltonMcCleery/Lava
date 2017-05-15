@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <center>
        <div class="col-md-12 col-md-5">
            <div class="panel panel-default">
                <!-- Heading for div "table" -->
                <div class="panel-heading">Navigation</div>
                    <center>
                        <div class="panel-body">

                            <div class="btn-group btn-group-justified" role="group">

                            <!-- Top trending videos -->
                              <div class="btn-group" role="group">
                                <button id='popular' class="btn btn-default" role="button">
                                    <span class="glyphicon glyphicon-fire" aria-hidden="true" style='color:red'></span>
                                    Trending Videos
                                </button>
                              </div>

                            <!-- All Playlists of a random Channel -->
                              <div class="btn-group" role="group">
                                <button id='playlist' class="btn btn-default" role="button">
                                    <span class="glyphicon glyphicon-gift" aria-hidden="true" style='color:purple'></span>
                                    Surprise Me
                                </button>
                              </div>

                            <!-- Explore other channels -->
                              <div class="btn-group" role="group">
                                <button id='explore' class="btn btn-default" role="button">
                                    <span class="glyphicon glyphicon-zoom-in" aria-hidden="true" style='color:blue'></span>
                                    Explore Channels
                                </button>
                              </div>

                            <!-- User's Favorites -->
                              <div class="btn-group" role="group">
                                <button id='favorites' class="btn btn-default" role="button">
                                    <span class="glyphicon glyphicon-star" aria-hidden="true" style='color:gold'></span>
                                    My Favorites <sup class="text-primary"><small>BETA</small></sup>
                                </button>
                              </div>

                            <!-- YouTube Livestreaming -->
                              <div class="btn-group" role="group">
                                <button id='livestream' class="btn btn-default" role="button">
                                    <span class="glyphicon glyphicon-record" aria-hidden="true" style='color:red'></span>
                                    Who's Live? <sup class="text-primary"><small>BETA</small></sup>
                                </button>
                              </div>

                            <!-- House a user's videos??? -->
                              <div class="btn-group" role="group">
                                <button id='user_vids' class="btn btn-default" role="button">
                                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                                    User Videos <sup class="text-primary"><small>ALPHA</small></sup>
                                </button>
                              </div>

                            </div>

                    </div>
                </center>
            </div>
        </div>
        </center>
    </div>
    <div id = "placeholder">
</div>

<!-- Where YT Api Results will be put by Jquery -->
<div class="container">
    <div id = "content">
</div>

@endsection