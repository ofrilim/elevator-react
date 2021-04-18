
export function getBuildingData(numOfFloorsInBuilding, numOfElevators) {
  return {
    floorsInBuilding: createFloorsBuilding(numOfFloorsInBuilding),
    elevators: createElevators(numOfElevators) 
  }; 
};

function createFloorsBuilding(num) {
  let initialArray = Array.from(Array(num).keys());

  let floorsArray = initialArray.map((floorId) => {
    return {
      number: floorId,
      condition: 'call',
    }
  });

  return floorsArray;
}

function createElevators(num) {
  let initialArray = Array.from(Array(num).keys());

  let elevatorsArray = initialArray.map((elevatorId) => {
    return {
      id: elevatorId,
      isOccupied: false,
      isDoorOpen: false,
      inFloor: 0,
      position: 0,
    }
  });

  return elevatorsArray;
}