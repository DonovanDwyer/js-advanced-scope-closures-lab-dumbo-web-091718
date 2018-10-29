function produceDrivingRange(blockRange){
  return function(start, end){
    let numStart = parseInt(start);
    let numEnd = parseInt(end);
    let range = Math.abs(numEnd - numStart);
    if (range > blockRange){
      return `${range - blockRange} blocks out of range`;
    } else{
      return `within range by ${range}`;
    }
  }
}

function produceTipCalculator(price){
  return function(tip){
    return price * tip;
  }
}


function createDriver(name){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }
  }
}
