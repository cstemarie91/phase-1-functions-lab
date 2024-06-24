function distanceFromHqInBlocks(blocks) {
    if(blocks >= 42)
        return blocks - 42
    else if(blocks < 42)
        return blocks - 26 

  }
function distanceFromHqInFeet(blocks) {
    if (blocks >= 42)
        return ((blocks - 42) * 264)
    else if (blocks < 42)    
        return ((blocks -26) * 264)
}
function distanceTravelledInFeet(block1, block2){
    if (block1 >= 42)
        return (block2 - block1) * 264
    else if (block1 < 42)
        return ((block1 - block2) * 264)
}
function calculatesFarePrice(start, destination) {
    if (destination > start && (destination - start) * 264 < 400) return 0;
    else if (
        destination > start &&
        (destination - start) * 264 > 2000 &&
        (destination - start) * 264 <= 2500
    )
        return 25;
    else if ((start - destination) * 264 > 400 && (start - destination) * 264 < 2000)
        return ((start - destination) * 264 - 400) * 0.02;
    else if (start > destination && (start - destination) * 264 > 2500)
        return "cannot travel that far";
}


  distanceFromHqInBlocks(50);
  distanceFromHqInBlocks(34);
  distanceFromHqInFeet(43);
  distanceFromHqInFeet(50);
  distanceFromHqInFeet(34);
  distanceTravelledInFeet(43, 48);
  distanceTravelledInFeet(50, 60);
  distanceTravelledInFeet(34, 28);
  calculatesFarePrice(34, 32);
  calculatesFarePrice(50, 58);
  calculatesFarePrice(34, 24);