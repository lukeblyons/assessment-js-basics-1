///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
console.log(' ')
let totalAcres = 0

for(let i = 0; i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}
console.log(`Total Acres Picked: ${totalAcres}`)
console.log(' ')
//i created a variable with a value of zero so when i did the for-loop i could change totalAcres by setting it equal to the sum of all 3 apple types. I then logged total acres.


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres / fujiAcres.length
console.log(`Average Daily Acres Picked: ${averageDailyAcres}`)
console.log(' ')
//i divided the total acres by the number of says to get the averageDailyAcres then logged it

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while(acresLeft > 0){
    days++;
    acresLeft -= averageDailyAcres;
}

console.log(`Days of work left: ${days}`);
console.log(' ')
//I did a while loop. While there were still acres left, I added a day and subtracted the averageDailyAcres from the acresLeft then logged it.

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []

const acreYield = 6.5

for(let i = 0; i < fujiAcres.length; i++)
    fujiTons.push(fujiAcres[i] * acreYield);
   
for(let i = 0; i < galaAcres.length; i++){
    galaTons.push(galaAcres[i] * acreYield);
}
for(let i = 0; i < pinkAcres.length; i++){
    pinkTons.push(pinkAcres[i] * acreYield);
}
console.log('Tons Picked Per Day:')
console.log(`Fuji: ${fujiTons}`);
console.log(`Gala: ${galaTons}`);
console.log(`Pink: ${pinkTons}`);
console.log(' ')
//i set to varietyTons to empty then created a acreYield variable to show that 6.5 tons come from each acre. I then did a for loop for each variety that started at 0, went as long as there were numbers left in the array and incremented. I then pushed each array figure to the empty arrays after they were multiplied by the acreYield. Then I logged it.



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

let tonsToPounds = 2000

for(let i = 0; i < fujiTons.length; i++){
    fujiPounds += fujiTons[i] * tonsToPounds;
    galaPounds += galaTons[i] * tonsToPounds;
    pinkPounds += pinkTons[i] * tonsToPounds;
}
console.log('Total Pounds picked Per Variety:')
console.log(`Fuji: ${fujiPounds}`);
console.log(`Gala: ${galaPounds}`);
console.log(`Pink: ${pinkPounds}`);
console.log(' ')
//i set the varietyPounds to zero, then created a conversion variable so i could use that to get pounds per ton. I then did a for-loop to calulate the amount of total pounds picked per variety. I then logged it.



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log('Profit Per Variety:')
console.log(`Fuji: $ ${fujiProfit}`);
console.log(`Gala: $ ${galaProfit}`);
console.log(`Pink: $ ${pinkProfit}`);
console.log(' ')
//I set the varietyProfit to equal varietyPounds multiplied by the variety price. This would give me a total profit for each variety. I then logged it.

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log('Total Profit:')
console.log(`$ ${totalProfit}`)
console.log(' ')
//I created the variable totalProfit and set it equal to the sum of each variety profit. I then logged it.