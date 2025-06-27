function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true ;
            if( success ){
                resolve("Data fetch Succesfully");
            }
            else{
                reject("Error");
            }
        },3000)
    })
}

// let response = fetchData();
// console.log(response);

fetchData().
    then((data)=>{
        console.log(data)
        return "Abhay";
    }).
    then((data)=>{
        console.log(data)
    }).
    catch((data)=>{
        console.log(data)
    })