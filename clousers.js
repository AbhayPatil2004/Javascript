function outer(){
    let counter = 4 ;
    return function(){
        counter ++ ;
        return counter  ;
    }
}

let increment = outer() ;
let num = increment() ;

console.log(num);