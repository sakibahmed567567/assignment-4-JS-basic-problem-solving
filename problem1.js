/*Problem:1  radianToDegree

ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।*/

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
let givenRadian = 1;
let assignRadian = radianToDegree(givenRadian);
console.log(assignRadian);