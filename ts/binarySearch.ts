// Given an array of integers nums which is sorted in ascending order, and an integer target, 
// write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // We have pages to look at...

        // We get the middle of the book
        // Math.floor to ignore the decimals
        let mid = Math.floor((left + right)/2);
        
        if (nums[mid] === target) {
            // Returne the indice
            return mid;
        } else if (nums[mid] < target) {
            // We move to the right, updating our left
            left = mid + 1;
        } else {
            // We move to the left, updating our right
            right = mid - 1;
        }
    };

    // If it is not there
    return -1;
};

let nums = [-1,0,3,5,9,12];
let target = 9;

console.log(target, ' exists in nums and its index is ', search(nums, target));
