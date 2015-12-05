var photo_count = 14;
var photoArray = [];
var picksThisSession = [];

function Photo (number) {
	this.number = number;
	this.votes = 0;
	
}

//create 14 photo objects and set their src
function initializePhotos (){
	for (i=0; i < photo_count; i++){
		photoArray[i]  = new Photo(i);
		photoArray[i].src = 'images/' + i + '.jpg';
		// use this to check if all images are displaying properly
		//$('#img'+i).attr('src', photoArray[i].src);
	}
}

//generate random numbers for photos
function randomTwoPicks (){
	//to get range of 0-13 use the allgorithm below
	var firstPick = Math.floor(Math.random()*(14));
	var secondPick = Math.floor(Math.random()*(14));
	console.log(firstPick);
	console.log(secondPick);

	//check to see if previously picked numbers are selected 
	if(picksThisSession.indexOf(firstPick) !== -1 || picksThisSession.indexOf(secondPick) !== -1){
		console.log('at least one photo already shown');
		randomTwoPicks();
	}
	//check if two identical numbers are selected
	else if(firstPick === secondPick){
		console.log('picks are the same number');
		randomTwoPicks();
	}
	else{
		console.log('selection success!');
		selectPhotos(firstPick, secondPick);
	}
}

function selectPhotos(a,b){
	//ADD a way to check for photos that have not been shown yet below
	//display photos from array based on the index of array and two random numbers
	console.log(photoArray[a]);
	console.log(photoArray[b]);
	var $optionOne = photoArray[a].src;
	var $optionTwo =  photoArray[b].src;
	$('#img0').attr('src', $optionOne);
	$('#img1').attr('src', $optionTwo);

}

 

initializePhotos();
console.log(photoArray);
randomTwoPicks();

