let produceDrivingRange = function(blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distanceToTravel = Math.abs(start - end);
    let difference = blockRange - distanceToTravel;

    if (difference > 0) {
      return `within range by ${difference}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  };
};

function produceTipCalculator(percent) {
  return function(fare) {
    return percent * fare;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  };
}
