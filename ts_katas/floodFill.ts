// You are given an image represented by an m x n grid of integers image, where image[i][j] represents 
// the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to 
// perform a flood fill on the image starting from the pixel image[sr][sc].
// To perform a flood fill:
// Begin with the starting pixel and change its color to color.
// Perform the same process for each pixel that is directly adjacent (pixels that share a side with the 
// original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
// Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their 
// color if it matches the original color of the starting pixel.
// The process stops when there are no more adjacent pixels of the original color to update.
// Return the modified image after performing the flood fill.

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    let originalColor = image[sr][sc];
    let newColor = color;

    // We validate if the color is already the same color we're about to paint
    if (originalColor === newColor) {
        return image;
    }

    // How many arrays we have (rows): let r = image.length; 
    // How many elements we have in the first row (columns): let c = image[0].length

    // Recursivity: (Depth-First Search)
    function dfs(r: number, c: number){

        // What if we go outside in the matriz, or if the pixel is not the color we want to paint
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== originalColor) {
            return;
        }

        // We paint the pixel
        image[r][c] = newColor;

        dfs(r - 1, c); // Derrama pintura hacia ARRIBA
        dfs(r + 1, c); // Derrama pintura hacia ABAJO
        dfs(r, c - 1); // Derrama pintura hacia la IZQUIERDA
        dfs(r, c + 1); // Derrama pintura hacia la DERECHA
    }

    // First painting
    dfs(sr, sc);

    // Return image updated with new colors
    return image;
};

let image = [[1,1,1],[1,1,0],[1,0,1]];
let sr = 1;
let sc = 1;
let color = 3;
console.log(floodFill(image, sr, sc, color));