
    let posCallback


 function success(position) {

         let  myLocation={
        lat:"test",
        long:"test"
    }

  myLocation.lat = position.coords.latitude;
    myLocation.long= position.coords.longitude;
// kald callback der henter data
posCallback(myLocation)
  }

  function error() {
  console.log("no pos error");
  
     let  myLocation={
        lat:"test",
        long:"test"
    }

  posCallback(myLocation)
  }



  export function getPosition(callback){

posCallback=callback

  if (!navigator.geolocation) {
   //"Geolocation is not supported by your browser";
  } else {
   
    let myPos=navigator.geolocation.getCurrentPosition(success, error);
  }


}


