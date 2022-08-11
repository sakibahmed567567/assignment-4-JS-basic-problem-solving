//Problem-1: radianToDegree calcutating

function radianToDegree(radian) {
    const calculatingDegree = radian * (180 / Math.PI);
    const degree = calculatingDegree.toFixed(2);
    if (radian <= 0) {
        return 'Please, enter valid radian number as input';
    }
    else {
        return degree;
    }
}

//Problem 2: isJavaScriptFile check

function isJavaScriptFile(fileName) {
    if (fileName == '') {
        return 'Please enter your file name';
    }
    else if (fileName.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }
}

//Problem 3: oilPrice calculating

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    let dieselPerQuantityPrice = 114;
    let totalDieselPrice = dieselQuantity * dieselPerQuantityPrice;
    let petrolPerQuantityPrice = 130;
    let totalPetrolPrice = petrolQuantity * petrolPerQuantityPrice;
    let octanePerQuantityPrice = 135;
    let totalOctanePrice = octaneQuantity * octanePerQuantityPrice;
    let totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;

    if (dieselQuantity < 0 && petrolQuantity < 0 && octaneQuantity < 0) {
        return 'Oh no! oil quantity must be a positive value';
    }
    else if (dieselQuantity < 0 || petrolQuantity < 0 || octaneQuantity < 0) {
        return 'Oh no! We can not calculate oil price in negative input';
    }
    else if (dieselQuantity == 0 && petrolQuantity == 0 && octaneQuantity == 0) {
        return 'Oh sorry! Any oil quantity have to input';
    }
    else if (dieselQuantity >= 0 || petrolQuantity >= 0 || octaneQuantity >= 0) {
        return totalOilPrice;
    }
    else {
        return totalOilPrice;
    }
}

//Problem 4: publicBusFare calculating

function publicBusFare(goingPeople) {
    const busFare = 250;
    let remainderBeforeGoingReservedBus = goingPeople % 11;
    let remainderAfterGoingReservedBus = goingPeople % 50;
    let remainderAfterGoingMicro = remainderAfterGoingReservedBus % 11;

    if (goingPeople <= 0) {
        return 'You have to take someone if you want to go to picnic'
    }
    else if (goingPeople > 0 && goingPeople < 11) {
        return goingPeople * busFare;
    }
    else if (remainderBeforeGoingReservedBus == 0 && goingPeople < 50) {
        return 0;
    }
    else if (remainderBeforeGoingReservedBus > 0 && remainderBeforeGoingReservedBus < 11 && goingPeople < 50) {
        return remainderBeforeGoingReservedBus * busFare;
    }
    else if (remainderAfterGoingReservedBus == 0) {
        return 0;
    }
    else if (remainderAfterGoingReservedBus > 0 && remainderAfterGoingReservedBus < 11) {
        return remainderAfterGoingReservedBus * busFare;
    }
    else if (remainderAfterGoingMicro > 0 && remainderAfterGoingMicro < 11) {
        return remainderAfterGoingMicro * busFare;
    }
    else {
        return 0;
    }
}

//Problem 5: isBestFriend check

function isBestFriend(parameter1, parameter2) {

    if (parameter1.name == '' || parameter1.friend == '' || parameter2.name == '' || parameter2.friend == '') {
        return 'Please enter valid values';
    }
    else if (parameter1.name == parameter2.friend && parameter1.friend == parameter2.name) {
        return true;
    }
    else {
        return false;
    }
}