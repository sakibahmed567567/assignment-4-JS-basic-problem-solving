/* Problem 4: publicBusFare
একটি বড় সংখ্যক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 

উদাহরণ১ঃ
যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

উদাহরণ২ঃ
যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।*/

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
let existingPeople = 45;
let assignPeople = publicBusFare(existingPeople);
console.log(assignPeople);