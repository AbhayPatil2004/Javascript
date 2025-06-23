// let car = {
//     start : function(){
//         return "car";
//     }
// }


class A{

    constructor(name){
        console.log("Hello World");
        this.name = name ;
    }

    start(){
        console.log( this.name );
    }
}

class B extends A{

    // constructor(){
    //     console.log( "Hello wrold" );
    // }

    drive(){
        console.log( this.name );
    }
}

let a = new A('Abhay');
let b = new B();
b.drive();

// Encapsulation

class bank{

    #balance = 0 ;

    deposite(amount){
        this.#balance += amount ;
        return this.#balance;
    }

    getBalance(){
        return this.#balance;
    }

}   

let account = new bank();
console.log(account.getBalance());

class c{
    start(){
        console.log("in c");
    }
}

class d extends c{
    start(){
        console.log('in d');
    }
}

let C = new c();
C.start();
let D = new d();
D.start();

class claculator {

    static add( a , b ){
        return a + b ;
    }
}

console.log(claculator.add(10,20));