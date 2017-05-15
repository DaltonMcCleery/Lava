// Check to make sure document (homepage) is ready/loaded first!
$(document).ready(function () {

	// You'll need a YouTube API key -> https://developers.google.com/youtube/v3/
	var api_key = "";

	// HTML to show what page is currently displaying
	function pageHolder(tag) {
		$('#placeholder').empty();
		var currentPage = "<center><h1>"+tag+"</h1></center></div>";
		$('#placeholder').append(currentPage);
	}

	// this is called when one of the nav buttons hasn't been pressed/is not active
	// TODO: fix this/make better
	var upArrows = '<span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>';
	var para = "<p>Access YouTube Videos without going to YouTube</p>";
	$('#placeholder').append("<center><h2>"+upArrows+" Click a button above! "+upArrows+"</h2>"+para+"</center>");

	// used to store html-written data to be passed to the homepage
	var display;

	// Displays a list of Playlists from a YouTube channel
	$("#playlist").click(function() {
		// clear out the div first
		$('#content').empty();

		pageHolder("Suprise!")
		// getPlaylist("UCBRwJXDODPhwLFsh54lxdPw");
		getPlaylist("UC-lHJZR3Gqxm24_Vd_AJ5Yw");
	});

	// Displays an unordered list of channels
	$("#explore").click(function() {
		// clear out the div first
		$('#content').empty();

		pageHolder("Explore Channels");
		// TODO: fix this function's implementation
		exploreVids("letsplay");
		exploreVids("erb");
		exploreVids("roosterteeth");
		exploreVids("pewdiepie");
		exploreVids("jeremyjahns");
		exploreVids("thebluedevils");
	});

	// displays an ordered list of videos that are currently trending on YouTube
	$("#popular").click(function() {
		// clear out the div first
		$('#content').empty();

		pageHolder("Top Trending Videos");
		getPopVids();
	});

	// TODO
	$("#favorites").click(function() {
		// clear out the div first
		$('#content').empty();

		pageHolder("The Best Ones");
		$('#content').append('<center><text class="text-primary">NOT ACTIVE</center>')
		// TODO
	});

	// TODO
	$("#livestream").click(function() {
		// clear out the div first
		$('#content').empty();

		pageHolder("Currently Livestreaming");
		$('#content').append('<center><text class="text-primary">NOT ACTIVE</center>')
		// TODO
	});

	// TODO
	$("#user_vids").click(function() {
		// clear out the div first
		$('#content').empty();

		pageHolder("User Created Content");
		$('#content').append('<center><text class="text-primary">NOT ACTIVE</center>')
		// TODO
	});

	// Using YouTube's API,
	// Perform a Jquery GET request to get a list of objects
	// containing specified elements and info and then
	// write them to an HTML div tag.
	function getPopVids() {

		$.get(
			// URL for Youtube API GET request
			"https://www.googleapis.com/youtube/v3/videos", 
			{
				// What info to get...
				// Snippet = video details
				// Player = video's actual content
				// Statistics = view count
				part: 'snippet, player, statistics',
				// Filter by mostPopular
				chart: "mostPopular",
				// Google API Key
				key: api_key,
				maxResults: 10
			},
			function (data) {

				// Loop through the objects we got from the GET request
				$.each(data.items, function (i, item) {
					// console.log(item);
					// Check the current iteration and see if the row tag needs to be closed
					if (i % 2 == 0)
			        {
			          //Close current ROW div and then reopen another ROW
			          $('#content').append("</div> <div class='row'>");
			        }
					// Messy...
					// Create an HTML/Bootstrap Thumbnail template
					// and fill in the contents with the data retrieved
					// from the above GET request
					display = '<div class="col-sm-5 col-md-6">'+
								'<div class="thumbnail"><center>'+
	      							item.player.embedHtml+
	      							// '<img src="'+item.snippet.thumbnails.high.url+'">'+
	      						'</center><div class="caption">'+
					        		'<h2>'+item.snippet.title+'</h2>'+
					        		'<h3> Total Views: '+item.statistics.viewCount+'</h3>'+
					        		'<h4> Channel: '+item.snippet.channelTitle+'</h4>'+
	      						'</div></div></div>'

					// Append to html div id tag
					$('#content').append(display);
				});

				$('#content').append("</div>");
			}
		)
	};

	// TODO: make this into a list implementation instead of a one-and-done
	// Performs a similar purpose to getPopVids except the url and
	// some of the parameters are different.
	function exploreVids(username) {

		$.get(
			// URL for Youtube API GET request
			"https://www.googleapis.com/youtube/v3/channels", 
			{
				// What info to get...
				// Snippet = video details
				// Statistics = view count
				part: 'snippet, statistics',
				// Filter by mostPopular
				forUsername: username,
				// Google API Key
				key: api_key,
				maxResults: 1
			},
			function (data) {

				// Messy...
				// Create an HTML/Bootstrap Thumbnail template
				// and fill in the contents with the data retrieved
				// from the above GET request
				display = '<div class="col-sm-5 col-md-6">'+
							'<div class="thumbnail"><center><div class="caption">'+
					        	'<h1><strong>'+data.items[0].snippet.title+'</strong></h1>'+
					        	'<h3> Subscribers: '+data.items[0].statistics.subscriberCount+'</h3>'+
					        	'<h4> Channel: '+data.items[0].snippet.title+'</h4>'+
					        '<p><a href='+'https://www.youtube.com/'+data.items[0].snippet.customUrl+' class="btn btn-primary" role="button">'+
					        'Check em out!</a></p></div></div></div>'

				// Append to html div id tag
				$('#content').append(display);
			}
		);
	};

	// TODO
	function getPlaylist(channelID) {

		$.get(
			// URL for Youtube API GET request
			"https://www.googleapis.com/youtube/v3/playlists", 
			{
				// What info to get...
				// Snippet = video details
				// Player = video's actual content
				// Statistics = view count
				part: 'snippet, player',
				// Have to specify channel ID!
				channelId: channelID,
				// Google API Key
				key: api_key,
				maxResults: 10
			},
			function (data) {

				// Loop through the objects we got from the GET request
				$.each(data.items, function (i, item) {
					// console.log(item);
					// Check the current iteration and see if the row tag needs to be closed
					if (i % 2 == 0)
			        {
			          //Close current ROW div and then reopen another ROW
			          $('#content').append("</div> <div class='row'>");
			        }
			        // console.log(item);
					// Messy...
					// Create an HTML/Bootstrap Thumbnail template
					// and fill in the contents with the data retrieved
					// from the above GET request
					display = '<div class="col-sm-5 col-md-6">'+
								'<div class="thumbnail"><center>'+
	      							'<img src="'+item.snippet.thumbnails.high.url+'">'+
	      						'</center><div class="caption">'+
					        		'<h2>'+item.snippet.title+'</h2>'+
					        		'<p>'+item.snippet.description+'</h3>'+
					        		'<h4> Channel: '+item.snippet.channelTitle+'</h4>'+
	      						'</div></div></div>'

					// Append to html div id tag
					$('#content').append(display);
				});

				$('#content').append("</div>");
			}
		)
	};
});