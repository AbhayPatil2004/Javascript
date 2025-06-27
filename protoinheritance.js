function Person(name){
    this.name = name ;
}

Person.prototype.greet = function(){
    console.log(`Hello ${this.name}` )
}

let abhay = new Person("Abhay");
abhay.greet();

