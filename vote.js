var photo_count = 14;
var photoArray = [];
var picksThisSession = [];
var currentTwoPicks = [];

function Photo (number, img) {
	this.number = number;
	this.votes = 0;
	this.shownCounter = 0;
	this.img = img;
}

//create 14 photo objects and set their img src
function initializePhotos (){
	currentTwoPicks = [];
	if(localStorage.length > 0){
		photoArray = JSON.parse(localStorage['kitties']);
		$('#img0').show();
		$('#img1').show();
		
	}
	else{
		for (i=0; i < photo_count; i++){
			photoArray.push(new Photo(i, 'images/' + i + '.jpg'));
			// use this to check if all images are displaying properly
			//$('#img'+i).attr('src', photoArray[i].src);
		}
		
	}
	randomTwoPicks();
}

//generate random numbers for photos
function randomTwoPicks (){
	//to get range of 0-13 use the algorithm below
	var firstPick = Math.floor(Math.random()*(14));
	var secondPick = Math.floor(Math.random()*(14));
	console.log(firstPick);
	console.log(secondPick);

	/*check to see if previously picked numbers are selected for this session
	we want to only show photos the user has not seen until all photos have had a chance
	Additionally, we could create a list of objects that tracks to see what "matchups"
	have been displayed and not repeat those as well, but we will operate as if our user can
	change at any time or they may change thier mind on the cutest of two choices 
	and thus specific repeats will be fine.*/

	if(picksThisSession.indexOf(firstPick) !== -1 || picksThisSession.indexOf(secondPick) !== -1){
		if(picksThisSession.length >= (photoArray.length - 1)){
			console.log('All photos shown, reseting session picks');
			picksThisSession = [];
			randomTwoPicks();
		} 
		else {
		console.log('at least one photo already shown this session: re-selecting');
		randomTwoPicks();
		}
	}
	//check if two identical numbers are selected
	else if(firstPick === secondPick){
		console.log('picks are the same number: re-selecting');
		randomTwoPicks();
	}
	else{
		console.log('selection success!');
		picksThisSession.push(firstPick);
		picksThisSession.push(secondPick);
		selectPhotos(firstPick, secondPick);
		
	}
}

function selectPhotos(a,b){
	//ADD a way to check for photos that have not been shown yet below
	//display photos from array based on the index of array and two random numbers
	console.log(photoArray[a]);
	console.log(photoArray[b]);
	photoArray[a]['shownCounter']++;
	photoArray[b]['shownCounter']++;
	currentTwoPicks.push(photoArray[a]);
	currentTwoPicks.push(photoArray[b]);
	var $optionOne = photoArray[a].img;
	var $optionTwo =  photoArray[b].img;
	$('#img0').attr('src', $optionOne);
	$('#img1').attr('src', $optionTwo);
	return photoArray[a], photoArray[b];
}

function showcase(){

}

function image1Selcted (){
	console.log(currentTwoPicks);
	$('#img1').hide();
	currentTwoPicks[0].votes++;
	console.log('you clicked on the 1st photo!');
	console.log(currentTwoPicks[0].votes);
	console.log(currentTwoPicks[0].shownCounter);
	console.log(currentTwoPicks[0].votes/currentTwoPicks[0].shownCounter);
	localStorage['kitties'] = JSON.stringify(photoArray);
}

function image2Selcted  (){
	console.log(currentTwoPicks);
	$('#img1').hide();
	currentTwoPicks[1].votes++;
	console.log('you clicked on the 2nd photo!');
	console.log(currentTwoPicks[1].votes);
	console.log(currentTwoPicks[1].shownCounter);
	console.log(currentTwoPicks[1].votes/currentTwoPicks[1].shownCounter);
	localStorage['kitties'] = JSON.stringify(photoArray);
}

initializePhotos();
console.log(photoArray);

$('#img0').click(function(){
	image1Selcted();
	initializePhotos();
});

$('#img1').click(function(){
	image2Selcted();
	initializePhotos();
});
