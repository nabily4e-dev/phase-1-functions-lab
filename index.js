// function distanceFromHqInBlocks(pickupLocation) {
//     // Calculate the number of blocks from Scuber's headquarters (42nd Street) to the pickup location
//     return Math.abs(42 - pickupLocation);
//   }
  
//   function distanceFromHqInFeet(pickupLocation) {
//     // Call the distanceFromHqInBlocks function to get the number of blocks from Scuber's headquarters to the pickup location
//     const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
//     // Calculate the distance in feet based on the number of blocks
//     return distanceInBlocks * 264;
//   }
  
//   function distanceTravelledInFeet(start, destination) {
//     // Calculate the number of blocks travelled based on the start and destination blocks
//     const distanceInBlocks = Math.abs(destination - start);
//     // Calculate the distance in feet based on the number of blocks
//     return distanceInBlocks * 264;
//   }
  
//   function calculatesFarePrice(start, destination) {
//     // Calculate the distance travelled in feet
//     const distanceTravelled = distanceTravelledInFeet(start, destination);
//     // If the distance travelled is more than 2500 feet, return 'cannot travel that far'
//     if (distanceTravelled > 2500) {
//       return 'cannot travel that far';
//     }
//     // If the distance travelled is 400 feet or less, return 0
//     if (distanceTravelled <= 400) {
//       return 0;
//     }
//     // If the distance travelled is more than 2000 feet, return 25
//     if (distanceTravelled > 2000) {
//       return 25;
//     }
//     // Otherwise, calculate the fare based on the distance travelled (2 cents per foot after the first 400 feet)
//     return (distanceTravelled - 400) * 0.02;
//   }
  
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
      return 'cannot travel that far';
    } else if (distance > 2000) {
      return 25;
    } else if (distance > 400) {
      return (distance - 400) * 0.02;
    } else {
      return 0;
    }
  }
  