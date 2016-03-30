'use strict';

// **************************
// API Keys & Empty Functions
// **************************

var echoNest = {};

var echoNestKey = 'SO5PRLOHX9IBY34FA';
var echoNestURL = 'http://developer.echonest.com/api/v4/song/search';
var echoNestSongList = [];
var spotifySongList = [];

// **************************
// Functions for User Selection
// **************************

// When user selects festival, populate festivalName
// var selectedFestival = ''; // *** GET FROM USER SELECTION
var festivalName = '';
var selectedFestival = '';

// Create checkbox/label for each artist in music festival array

// User also selects # of songs (1 - 10)
// Add extra songs for case of duplicates
var userNumSongs = '';
var numSongs = '';

// When user selects artists for playlist create a new array with artist ID's
var selectedArtists = [];

echoNest.populateArtists = function (festivalChoice) {
	var festivalArtists = festivalChoice.artists;

	$.each(festivalArtists, function (i, value) {
		var checkbox = '<input class="festivalArtists" type="checkbox" name="festivalArtists" value="' + value.artistString + '" id="' + value.artistString + '">';
		var label = '<label for="' + value.artistString + '">' + value.artistName + '</label>';

		$('div.artistList ul').append('<li>' + checkbox + label + '</li>');
	});

	$('label').hover(function () {
		$(this).parent().addClass('hover');
	}, function () {
		$(this).parent().removeClass('hover');
	});

	$('input[type=checkbox]').on('click', function (e) {
		if ($('input[type=checkbox]:checked').length > 20) {
			$(this).prop('checked', false);
		} else {
			$(this).parent().toggleClass('select');
		}

		// Add alert (modal?) if user selects more than 20 artists
	});

	$('input').click(function () {
		$('input:not(:checked)').parent().removeClass("select");
		$('input:checked').parent().addClass("select");
	});

	// if ($('input[type=radio]').is(:checked)) {

	// };

	$('a.getPlaylist').on('click', function () {
		$('#results').removeClass('hidden');
		$('#footer').removeClass('hidden');
		$('span.festival').text(festivalChoice.name);
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '#results'
		});
		var userSelectionSongs = $('input:radio[name=numberSongs]:checked').val();
		userNumSongs = parseInt(userSelectionSongs);
		numSongs = userNumSongs + 5;
		// console.log(userNumSongs);
		// console.log(numSongs);
		var userArtistSelection = [];
		$('input:checkbox[name=festivalArtists]:checked').each(function () {
			userArtistSelection.push(window[$(this).val()]);
		});
		// console.log(userArtistSelection);
		$.each(userArtistSelection, function (i, value) {
			selectedArtists.push(value.artistID);
		});
		// console.log(selectedArtists);
		echoNest.getAllSongs(selectedArtists);
	});
};

// **************************
// Functions for song selection
// **************************

var songData = [];

// Write a function to get songs for each artist in array --> uses getArtistSongs, lead into filterSongs
echoNest.getAllSongs = function (artistArray) {
	// Push all API data into one array
	var apiData = [];
	for (var i = 0; i < artistArray.length; i += 1) {
		apiData.push(echoNest.getArtistSongs(artistArray[i], numSongs));
	};
	// console.log(apiData);

	// Filter down API data to information needed (songs)
	$.when.apply(null, apiData).then(function () {
		songData = Array.prototype.slice.apply(arguments);
		songData = songData.map(function (value) {
			return value[0].response.songs;
		});
		// console.log(songData);
		echoNest.filterSongs(songData);
	});
};

// Write a function to call back # of songs
echoNest.getArtistSongs = function (artistID, songNum, time) {
	return $.ajax({
		url: echoNestURL,
		method: 'GET',
		dataType: 'json',
		data: {
			api_key: echoNestKey,
			artist_id: artistID,
			format: 'json',
			sort: 'song_hotttnesss-desc',
			start: 0,
			results: songNum,
			bucket: ['id:spotify', 'tracks'],
			limit: true
		},
		traditional: true
	});
};

// Write a function to delete duplicate songs from arrays
echoNest.filterSongs = function (songs) {
	var cleanedSongs = [];
	for (var i = 0; i < songs.length; i = i + 1) {
		var noDuplicates = _.uniq(songs[i], function (value) {
			return value.title;
		});

		// Filter out Christmas songs??
		// var noDuplicatesChristmas = _.filter(noDuplicates[i], function(value){
		// 	return value.title != /([^Christmas])\w+/i;
		// });
		cleanedSongs.push(noDuplicates);
	};
	// console.log(cleanedSongs);
	echoNest.compileSongs(cleanedSongs);
};

// Write a function to take the userNum # of songs from each cleaned array
echoNest.compileSongs = function (songArrays) {
	// For each array inside the main array, push the # of song OBJECTS that the user requested
	$.each(songArrays, function () {
		for (var i = 0; i < userNumSongs; i = i + 1) {
			echoNestSongList.push(this[i]);
		};
	});
	// console.log(echoNestSongList);
	// echoNest.postSongInfo(echoNestSongList);
	var shuffled = echoNest.shuffleSongs(echoNestSongList);
	// console.log(shuffled);
	var doubleShuffle = echoNest.shuffleSongs(shuffled);
	echoNest.cleanArray(doubleShuffle);
};

// function to shuffle
echoNest.shuffleSongs = function (array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

echoNest.cleanArray = function (data) {
	var cleandata = data.filter(function (element) {
		return !!element;
	});
	// console.log(cleandata);
	echoNest.postSongInfo(cleandata);
};

// Write a function to post song info onto page *** TO BE CHANGED *** SUFFLE SONGS?
echoNest.postSongInfo = function (data) {
	// console.log(data);
	$.each(data, function (i, value) {
		// console.log(this);
		var songNumber = i + 1;
		var songItem = '<td>' + songNumber + '</td>';
		var songName = this.title;
		var nameItem = '<td>' + songName + '</td>';
		var artistName = this.artist_name;
		var artistItem = '<td>' + artistName + '</td>';

		$('.results table').append('<tr>' + songItem + nameItem + artistItem + '</tr>');

		// Get spotify song ID
		var songID = this.tracks[0].foreign_id;
		var onlySongID = songID.replace("spotify:track:", "");
		spotifySongList.push(onlySongID);
	});
	// console.log(spotifySongList);
	echoNest.populateSpotify(spotifySongList);
};

echoNest.populateSpotify = function () {
	// Join all spotify song IDs into one string and create into URL for spotify player
	var spotifySongListChain = spotifySongList.join(',');
	var spotifySongListURL = 'https://embed.spotify.com/?uri=spotify:trackset:' + selectedFestival.name + ' ' + selectedFestival.year + ' Playlist:' + spotifySongListChain + '&theme=white';
	// console.log(spotifySongListURL);
	// Update spotify player on the page
	$('iframe').attr('src', spotifySongListURL);
};

// Initialize Function
echoNest.init = function () {
	$("#mySelect").heapbox();

	$('a.start').on('click', function (e) {
		e.preventDefault();
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '#festival'
		});
	});

	$('.heapOption a').on('click', function () {
		$('#artists').removeClass('hidden');
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '#artists'
		});
		selectedFestival = window[$('select').find(":selected").val()];
		// console.log(selectedFestival);
		// var festivalName = selectedFestival.name + ' ' + selectedFestival.year;
		festivalName = selectedFestival.name + ' ' + 'Lineup';
		// console.log(festivalName);
		$('h2.festival').text(festivalName);
		echoNest.populateArtists(selectedFestival);
	});
};

// **************************
// DOCUMENT READY
// **************************

$(document).ready(function () {
	echoNest.init();

	// $('input[type=checkbox]').on('click', function(evt) {
	//    if($("input[name='festivalArtists']:checked").length > 20) {
	// console.log('too many');
	//    	this.checked = false;
	//    };
	// });

	$('.startOver').on('click', function (e) {
		e.preventDefault();
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '#home'
		});
		location.reload();
	});
});