// TedTalks Search Tool project by Ponto.

var timeout;													// timer control variable, for message on resutls status
var timerIsOn = true;											// variable to check the timer for the delay on searching items

var showedFlag = false;											//flag to avoid hiding and showing the results status

			
var inputData;													// store input search string		

																
var searchTool = {												// main search function	

    onReady: function() {
	
	$('#searchinput').focus(); 									//search input get the focus on page load

	
	// ******************** Input functions ********************

																// to capture the enter key when submitting a search
	$(document).keyup(function (e) {
		if ( $('#searchinput').focus() && (e.which === 13) ) {
		inputData = $('#searchinput').val().trim(); 		//to avoid empty searchs
			if( inputEntryIsValid(inputData) ){			 		//evaluate if the entry is valid
				startNewSearch(inputData);					//generate the search and display the results

			}
		}
	 });
	 
																// to capture the search button when submitting a search
	$('.searchbutton').click(function() {
		inputData = $('#searchinput').val().trim(); 		//to avoid empty searchs
			if( inputEntryIsValid(inputData) ){ 				//evaluate if the entry is valid
				startNewSearch(inputData);					//generate the search and display the results

			}
	});

 
	// ******************** End Input functions ********************
	
	
        
    },
	
	};


// ******************** Internal functions ********************

																// Search generator function
	function startNewSearch(inputData) {
		
		showedFlag = false;										//flag reset on each new search
		
		timerIsOn = true;										// set timer true to stop the searching loop
		
		$('#videoframe').attr("src", ""); 						//set iframe to cancel current video, this is to avoid to keep the video playing wheil searching something new

		$('.results-message').fadeOut('fast', function(){							//hide message on each new search
			
			$('.results-message').html('Searching').hide().fadeIn('fast');			// Show a searching message while waiting the results
			
			searchingMessageLoop();													// generate a loop to dispaly a searching text like loading
			
		});
		
		$('#videos-grid').empty();								//empty the previous search in case there was one			
		$('#show-video').slideUp();								//hide show video div in case a video have been displayed		
	
		//request = 'https://content.googleapis.com/youtube/v3/search?part=snippet&q='+ inputData +'+TED&type=video&key=AIzaSyCXPLS2sjm8jzy2ZHTlJ9oLahkqr0ZY3r4';

		generateNewSearch(inputData);
		

		timeout = setTimeout(function() {						//timeout function to get some time to get the results
					
					if(timerIsOn){								//check if the searching loop is stopped
						$('.results-message').fadeOut('fast', function(){				//To hide the previous message, and then show the no results one
							$('.results-message').html('It seems that there are no results for "'+inputData+'"').hide().fadeIn('fast'); //if there are no results in the time set, a message is showed
						});
					}
					timerIsOn = false;							// reset timer check
		}, 6000);												//time delay setting
		

		

		
	}

	function inputEntryIsValid(inputValue){ 					// evaluates the input entry
		return (inputValue !== '');
	}
	
	function iterateOverResponse(response) {
    
			$.each(response.items, function(key, item) {						//iterate over each video retrieved
				
					if( item.snippet.channelTitle.indexOf("TED") >= 0  ){			// since the API can search for several authors, a filter is made on the authors video results
					
						clearTimeout(timeout); 									//Since a results is found, Clear the timer to avoid show the no results message
						timerIsOn = false;

						if(!showedFlag){										//Check flag status, if the message was already showed, avoid hidding and showing it again
						
							showedFlag = true;									// once first results are showed, flasg status change
							
							$('.results-message').fadeOut('fast', function(){		//Maybe the message is already showed, if so is hidden	
								$('.results-message').html('Results for "'+inputData+'"').hide().fadeIn('fast');		//show message for search performed
							});
						}

					   
						var $indVideo = $('<div></div>').addClass('individual-video video'+key ); 			//Create individual divitions for each video
						$indVideo.append('<h2>' + item.snippet.title + '</h2>');								//Add the title
						$indVideo.append('<img src="' + item.snippet.thumbnails.medium.url + '">');	//Add the thumbnail image	
						$indVideo.append('<p>by ' + item.snippet.channelTitle + '</p>');						//Add the author	

						      setTimeout(function () {														//delay to generate the effect to be added one by one
									$('#videos-grid').append($indVideo);									//Add the video
									$('#videos-grid').children( '.video'+key ).hide().slideDown('fast');	//scroll down effect on video adding
							  }, key*250);

						
						$indVideo.click(function() {							//to show video on click				
						 		showVideo(item.id.videoId, item.snippet.title);			//function to display video information	
						});

					}


				});



	}
	
	
	
	function searchingMessageLoop() {								// function to create a searching loading loop

		$('.results-message').html('Searching');					//first insertion
	
		setTimeout(function() {										// first delay
			if(timerIsOn){											// the if on each insertion if to avoid inserting an HTML value after the delay if results or no results message is showed
				$('.results-message').html('Searching .');			//second insertion
			}
		}, 500);

		setTimeout(function() {										// second delay	
			if(timerIsOn){
				$('.results-message').html('Searching . .');		//third insertion
			}
		}, 1000);
		
		setTimeout(function() {										// third delay
			if(timerIsOn){
				$('.results-message').html('Searching . . .');		//fourth insertion
			}
		}, 1500);
		
		setTimeout(function() {										// fourth delay
			if(timerIsOn){
				searchingMessageLoop();								//recursive call if timer is still on
			}
		}, 2000);
		
		
		
	}

// ******************** End Internal functions ********************





// ******************** HTML insertions functions ********************

	function showVideo(videoID, title) {									//function to display video information	
		
		//var videoID = id.substring(42,id.length);					//to get the video ID from the video API URL (that is different for the one needed on the iframe)

		$('#show-video').slideDown();								//slideDown effect to the video div display	

		$('#show-video h2').html(title);							// Display title
		$('#videoframe').attr("src", "http://www.youtube.com/embed/"+ videoID +"?rel=0&autoplay=1"); //set iframe properties to display the video
		
		// p = ($('#videoframe').offset());							//obtain video position, not seems to be working
		// p = ($('#videoframe').position());						//obtain video position, not seems to be working
		
		$("html,body").animate({ scrollTop: 180 },'slow');			//scroll to the video div position
		
		$('#searchinput').focus();									// input get the focus in case a new search is performed

	}

// ******************** End HTML insertions functions ********************








$(document).ready(function() {

	searchTool.onReady();											//go to main function after page is ready
	

});











// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {

// $('#response').empty(); //clears the div before a new search result is inserted

    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}


// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCXPLS2sjm8jzy2ZHTlJ9oLahkqr0ZY3r4');

   //generateNewSearch('travel');
}

function generateNewSearch(input) {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({

        part: 'snippet',
        q: input + ' TED',
        type: 'video',
        maxResults: '50',
        
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);

}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    //showResponse(response); 												//for testing

    iterateOverResponse(response);
}


