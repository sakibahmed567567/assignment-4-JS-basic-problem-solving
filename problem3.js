/*Problem 3: oilPrice

ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

ভিডিও ভালো করে দেখবে। 



প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

প্রতি লিটার অকটেনের এর দাম – 135 টাকা 



এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। */

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
let givenDieselQuantity = 0, givenPetrolQuantity = 8, givenOctaneQuantity = 3;
let assignQuantity = oilPrice(givenDieselQuantity, givenPetrolQuantity, givenOctaneQuantity);
console.log(assignQuantity);