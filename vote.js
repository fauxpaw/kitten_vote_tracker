var photo_count = 14;
var photoArray = [];
var catsThisSession = [];

function Photo (number) {
	this.number = number;
	this.votes = 0;
	
}

//create 14 photo objects and set their src
function initializePhotos (){
	for (i=0; i < photo_count; i++){
		photoArray[i]  = new Photo(i);
		photoArray[i].src = 'images/' + i + '.jpg';
		$('#img'+i).attr('src', photoArray[i].src);
	}
}

//generate random numbers for photos
function randomTwoPics (){
		var firstPick = Math.floor(Math.random()*(14));
		var secondPick = Math.floor(Math.random()*(14));
		console.log(secondPick);
		console.log(firstPick);
	if(firstPick === secondPick){
		randomTwoPics();
	}
	else{
		selectPhotos(firstPick, secondPick);
	}
	

}

function selectPhotos(a,b){
	//check for photos that have not been shown yet
	while (catsThisSession > 1){
	}
}

initializePhotos();
console.log(photoArray);
randomTwoPics();

