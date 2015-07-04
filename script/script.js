// TedTalks Search Tool project by Ponto.

var timeout;													// timer control variable, for message on resutls status

var showedFlag = false;											//flag to avoid hiding and showing the results status

																
var searchTool = {												// main search function	

    onReady: function() {
	
	$('#searchinput').focus(); 									//search input get the focus on page load

	
	// ******************** Input functions ********************

																// to capture the enter key when submitting a search
	$(document).keyup(function (e) {
		if ( $('#searchinput').focus() && (e.which === 13) ) {
		var inputData = $('#searchinput').val().trim(); 		//to avoid empty searchs
			if( inputEntryIsValid(inputData) ){			 		//evaluate if the entry is valid
				generateNewSearch(inputData);					//generate the search and display the results

			}
		}
	 });
	 
																// to capture the search button when submitting a search
	$('.searchbutton').click(function() {
		var inputData = $('#searchinput').val().trim(); 		//to avoid empty searchs
			if( inputEntryIsValid(inputData) ){ 				//evaluate if the entry is valid
				generateNewSearch(inputData);					//generate the search and display the results

			}
	});

 
	// ******************** End Input functions ********************
	
	
        
    },
	
	};


// ******************** Internal functions ********************

																// Search generator function
	function generateNewSearch(inputData) {
		
		showedFlag = false;										//flag reset on each new search
		
		$('.results-message').fadeOut('fast');					//hide message on each new search
		
		
		$('#videos-grid').empty();								//empty the previous search in case there was one			
		$('#show-video').slideUp();								//hide show video div in case a video have been displayed		
	
		// sendSearchToJson('https://gdata.youtube.com/feeds/api/videos?q='+ inputData +'+TED&alt=json' , inputData);		//I generate the jSon feed for the api
		sendSearchToJson('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ inputData +'+TED&order=viewCount&key={AIzaSyCXPLS2sjm8jzy2ZHTlJ9oLahkqr0ZY3r4}');

		
		timeout = setTimeout(function() {						//timeout function to get some time to get the results
					$('.results-message').html('It seems that there are no results for '+inputData).hide().fadeIn('fast'); //if there are no results in the time set, a message is showed
		}, 1000);
		

		
	}

	function inputEntryIsValid(inputValue){ 					// evaluates the input entry
		return (inputValue !== '');
	}
																//Json YouTube API search request
	function sendSearchToJson(feed, inputData) {
			$.getJSON(feed, function(data) {

				$.each(data['feed']['entry'], function(key, entry) {			//iterate over each video retrieved
				
					if( entry.author[0].name.$t.indexOf("TED") >= 0  ){			// since the API can search for several authors, a filter is made on the authors video results
					
					
						clearTimeout(timeout); 									//Since a results is found, Clear the timer to avoid show the no results message

						if(!showedFlag){										//Check flag status, if the message was already showed, avoid hidding and showing it again
						
							showedFlag = true;									// once first results are showed, flasg status change
							
							$('.results-message').fadeOut('fast', function(){		//Maybe the message is already showed, if so is hidden	
								$('.results-message').html('Results for '+inputData).hide().fadeIn('fast');		//show message for search performed
							});
						}

					   
						var $indVideo = $('<div></div>').addClass('individual-video video'+key ); 			//Create individual divitions for each video
						$indVideo.append('<h2>' + entry.title.$t + '</h2>');								//Add the title
						$indVideo.append('<img src="' + entry.media$group.media$thumbnail[0].url + '">');	//Add the thumbnail image	
						$indVideo.append('<p>by ' + entry.author[0].name.$t + '</p>');						//Add the author	

						      setTimeout(function () {														//delay to generate the effect to be added one by one
									$('#videos-grid').append($indVideo);									//Add the video
									$('#videos-grid').children( '.video'+key ).hide().slideDown('fast');	//scroll down effect on video adding
							  }, key*250);

						
						$indVideo.click(function() {							//to show video on click				
						 		showVideo(entry.id.$t, entry.title.$t);			//function to display video information	
						});

					}


				});


			});

	}
	

// ******************** End Internal functions ********************





// ******************** HTML insertions functions ********************

	function showVideo(id, title) {									//function to display video information	
		
		var videoID = id.substring(42,id.length);					//to get the video ID from the video API URL (that is different for the one needed on the iframe)

		$('#show-video').slideDown();								//slideDown effect to the video div display	

		$('#show-video h2').html(title);							// Display title
		$('#videoframe').attr("src", "http://www.youtube.com/embed/"+ videoID +"?rel=0&autoplay=1"); //set iframe properties to display the video
		
		// p = ($('#videoframe').offset());							//obtain video position, not seems to be working
		// p = ($('#videoframe').position());						//obtain video position, not seems to be working
		
		$("html,body").animate({ scrollTop: 270 },'slow');			//scroll to the video div position
		
		$('#searchinput').focus();									// input get the focus in case a new search is performed

	}

// ******************** End HTML insertions functions ********************




$(document).ready(function() {

	searchTool.onReady();											//go to main function after page is ready
	

});



