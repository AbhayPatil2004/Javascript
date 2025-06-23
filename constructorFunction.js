

function person(name,age){
    this.name = name ;
    this.age = age 
}

function car( make , model ){
    this.make = make ;
    this.model = model 
}

let mycar = new car('toyota','zfdf');
let nocar = car('toyota','zfdf');
console.log(mycar);
console.log(nocar);

function Tea( type ){
    this.type = type ;
    this.describe = function(){
        return `This is cup of tea ${this.type}`;
    }
}

let tea = new Tea("chai");
console.log(tea.describe());

function Animal( species ){
    this.species = species ;
}
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
};

let dog = new Animal('Dog');
console.log(dog.sound());