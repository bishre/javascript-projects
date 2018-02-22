function main(){
  var myPlaces = ['Tokyo', 'London', 'New York', 'San Francisco', 'Seoul'];
  var friendPlaces = ['Beijing', 'London', 'Paris', 'Madrid', 'Seoul'];

  for (let myPlacesIndex=0; myPlacesIndex<myPlaces.length; myPlacesIndex++){
    for (let friendPlacesIndex=0; friendPlacesIndex<friendPlaces.length; friendPlacesIndex++){
      if (friendPlaces[friendPlacesIndex]==myPlaces[myPlacesIndex]){
        console.log("we both would like to visit "+friendPlaces[friendPlacesIndex]);
      }
    }
  }
}
// function someFunction(){
//
//     var iable = "Hello, world";
//
//     for (let i = 0; i<1; i++){
//         let tuce = "Can you hear me?"
//         console.log(tuce); //Will print: Can you hear me?
//     }
//
//     console.log(iable); //Will print: Hello, world
//     console.log(tuce); //ReferenceError: tuce is not defined
//
// }
