// ternary operator 

let age = 45 ;
let vote = age >= 18 ? 'yes' : 'no';
console.log(vote);

// spread operator 

let num = [ 1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ];
function add( ...nums ){

    let sum = 0 ;
    for( let i = 0 ; i < nums.length ; i++ ){
        sum += nums[i];
    }

    return sum ;
}

console.log(add(1,2,4,7,4,5,5,6,7));