const person = {
    name : "abhay",
    greet(){
        console.log(this.name);
    }
    
}

person.greet();

const gf = person.greet;
gf();

const bg = person.greet.bind({name : "sfkskdfjk"});
bg();