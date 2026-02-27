// Given an array of integers nums and an integer target
// return indices of the two numbers such that they add up to target.
function twoSum(nums: number[], target: number): number[] {

    // 1. Create hashmap for notebook
    let hashmap: Map<number, number> = new Map();

    // 2. Iterate the array
    for(let i=0; i < nums.length; i++) {
        // 3. Finds what's needed to reach target
        let diff = target - nums[i] ;
        
        // 4. Check if we already have the diff number in notebook
        if (hashmap.has(diff)) {

            // 5. Return the key
            let num1 = hashmap.get(diff);
            
            return [num1 as number, i];
        }
        // 6. Keep the number and indice in the notebook
        hashmap.set(nums[i], i);
    }
    return [];
}

let array: number[] = [10, 7, 3, 4, 2, 1];
console.log(twoSum(array, 9));