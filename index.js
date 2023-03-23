
const headQuaters = 42;
function distanceFromHqInBlocks(blocks){  
   return Math.abs(blocks-headQuaters)
}

function distanceFromHqInFeet(blocks){
   distanceFromHqInBlocks(blocks)
   return Math.abs(distanceFromHqInBlocks(blocks)*264)
}


function distanceTravelledInFeet(distance,blocks){
    distanceFromHqInFeet(blocks)
return Math.abs ((blocks-distance)*264)
}


function calculatesFarePrice(blocks, distance){
let feetTraveled = distanceTravelledInFeet(distance, blocks)
   if(feetTraveled<=400){
    return 0
   }
   else if(feetTraveled>400 && feetTraveled<2000){
    return 2.56
   }
   else if(feetTraveled>2000 && feetTraveled<2500 ){
    return 25
   }
   else{
    return 'cannot travel that far'
   }

}