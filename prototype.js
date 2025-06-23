let computer = {
    cpu :12 
}
let lenovo = { screen :'hd',
    __proto__ :computer
};

console.log(computer.__proto__);
console.log(lenovo.cpu);
console.log(lenovo.__proto__);

let car = { tyre : 4 };

let tesla = {
    driver : 'AI'
}

Object.setPrototypeOf(tesla,car);
console.log( tesla.tyre);