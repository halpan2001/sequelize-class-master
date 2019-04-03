
//alternative to combined promises
let a = await Async1();
let a = await Async2();

//await keyword is waiting for a promise.


//Try and Catch

try{
  a();
} catch(error){
  console.log(error.message);
  console.log(error.constructor.name);
}

try{
  let artists = await getArtist();
} catch(error){

}



//Async and Await
async function getArtist(){
  //returns promise
}

let artist = await getArtist();


//Previous metohds of asynchronous js
//TIMEOUT
setTimeout(function(){
  console.log("hi")
}, 3000);

//CALLBACK FUNCTION
function getArtists(callbackFunction) {
  // some database call (asynchronous)
  //let artist = some db call
  callbackFunction(artists);
}

getArtist(function(artist)){

}

//PROMISE
function getArtist(){
  //return promise
}

getArtist.then(function(artist){
  //successful
}, function(error){
  //unsuccessful
})
