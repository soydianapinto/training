//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
// and removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Two Pointers Trick

function isPalindrome(s: string): boolean {
    // Clean the string, do not care about capitalize, numbers, dots, etc.
    let cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Two Pointers
    let left: number = 0;
    let right: number = cleanString.length - 1;

    while (left < right) {
        // We validate both values are the same word
        if (cleanString.charAt(left) !== cleanString.charAt(right)) {
            // If not, the rule is broken
            return false;
        } else {
            // If they are the same, we go for the next two words
            left+=1;
            right-=1;
        }
    }

    // Return true if it is a palindrome
    return true;
};

let word: string = "A man, a plan, a canal: Panama";
let word1: string = "race a car";
console.log(isPalindrome(word));
console.log(isPalindrome(word1));