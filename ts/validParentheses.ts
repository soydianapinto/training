// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

function isValid(s: string): boolean {
    // 1. Diccionary for reference
    const pares: {[key: string]: string} = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // 2. New Array
    let characters: string[] = [];

    // 3. Iterate the string character per character
    for (let i=0 ; i < s.length; i++){
        let character = s.charAt(i);

        // 4. Is it opening or closing?
        if (character in pares) {
            // 4.1 Its a closure
            let value = characters.pop();
            // 5. If the one we drop is NOT the closure or opening of it
            if (value !== pares[character]) {
                return false; // 6. Rule is broken
            }
            // 7. If it is, then we continue with the rest
        } else {
            // 4.2 Its an opening
            characters.push(character);
        }
    }

    // If it is empty, all is true. If something is still there, its false.
    return characters.length === 0;
};

let value: string = "({)}";
let value2: string = "{()}";
console.log(isValid(value));
console.log(isValid(value2));