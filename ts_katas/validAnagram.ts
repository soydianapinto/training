// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s: string, t: string): boolean {
    // They should have the same length, if not its not an anagram
    if (s.length !== t.length){
        return false;
    }

    // Define the inventary
    let inventario: Map<string, number> = new Map();
    
    // We iterate the first word
    for (let i=0; i < s.length; i++){
        let letter = s.charAt(i);
        // If it is already or not in the hashmap
        let value = inventario.get(letter) || 0;
        // Update the key and value in the map
        inventario.set(letter, value + 1);
    }

    // We iterate the second word
    for (let j=0; j< t.length; j++){
        let letter = t.charAt(j);
        // If the letter is not on the hashmap already, or if there's not more letters left from the previous for
        if (!inventario.has(letter) || inventario.get(letter) === 0) {
            return false;
        }
        
        // If it has the letter, we discount 1
        inventario.set(letter, (inventario.get(letter) as number) -1);
    }

    // Return true because the have the same number of letters
    return true;
};

let s = "this is a word";
let t = "this is another one";
let s1 = "nagaram";
let t1 = "anagram";
console.log(isAnagram(s, t));
console.log(isAnagram(s1, t1));