//returns true if coin is a valid value
let validDenomination = (coin) => {let coinDenom = [1, 5, 10, 25, 50, 100]; return (coinDenom.indexOf(coin)!== -1 ? true : false)};


//returns calculated coin object
let valueFromCoinObject = (obj) => {
     
    const {denom = 0, count = 0} = obj;
    return denom*count;
};
//console.log(valueFromCoinObject({denom: 5, count: 3}))

//returns value of coin objects within an array
let valueFromArray = (arr) => {
   
    let coinArr = [];
    for(i=0; i< arr.length; i++) {
        coinArr.push(valueFromCoinObject(arr[i]));
    }
    return coinArr.reduce((add, current) => add + current);
};


let coinCount = (...coinage) => `${valueFromArray(coinage)}`;


console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins));

module.exports = {coinCount, coins};