// var function scoped

function func1(){

    var message = "Hello" ;

    if( true ){
        var message = "Hi";
        console.log(message);
    }
    console.log(message);
}

// let block scoped 

function func2(){

    let message = "Hello" ;

    if( true ){
        let message = "Hi";
        console.log(message);
    }
    console.log(message);
}

func1() ;
func2() ;




