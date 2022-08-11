/* Problem:2  isJavaScriptFile 

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । */

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
let givenFile = 'file.js';
let assignFile = isJavaScriptFile(givenFile);
console.log(assignFile);