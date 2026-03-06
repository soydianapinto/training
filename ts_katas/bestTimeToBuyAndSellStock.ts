// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a 
// different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices: number[]): number {
    // Most cheap
    let cheapestPrice = Infinity;
    // Most profit
    let mostProfit = 0;
    // Today's gains
    let todaysGains = 0;

    for (let i = 0 ;i<prices.length;i++) {
        if (prices[i] < cheapestPrice) {
            // If it is a Ganga!
            cheapestPrice = prices[i];
        } else {
            // Calculate how much I could make if I sell
            todaysGains = prices[i] - cheapestPrice;
        }

        // We keep the record! This is the best profit I could make
        if (todaysGains > mostProfit) {
            mostProfit = todaysGains;
        }
    }
    return mostProfit;
};

let prices: number[] = [1,5,3,6,19,2,5,2,3,8];
console.log(maxProfit(prices));