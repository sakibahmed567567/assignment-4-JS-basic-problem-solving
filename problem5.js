/*Problem 5: isBestFriend
তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।*/

const names1 = { name: 'kala', friend: 'shada' };
const names2 = { name: '', friend: 'kala' };

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
const assignNames = isBestFriend(names1, names2);
console.log(assignNames);