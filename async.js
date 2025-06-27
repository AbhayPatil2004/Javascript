// console.log("Hello World");

// setTimeout(() =>{
//     console.log("Hell World");
// },2000)


// console.log("Hello World");



// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({name : "Abhay"} )
//         },2000)
//     })
// }

// async function getData(params) {
//     try{
//         console.log("Hello ");
//         const data = await fetchData()
//         console.log("HELLO");
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// getData();

function fetchData1(){

    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Data Send1 ");
        }, 2000)
    })
}

function fetchData2(){

    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Data Send2 ");
        }, 3000)
    })
}


async function getData(){

    try{
        console.log("Fetch Data");
        // const data1 = await fetchData1();
        // const data2 = await fetchData2();

       const [data1 , data2] = await Promise.all([fetchData1() , fetchData2()]);
        console.log("solve");
        console.log(data1);
        console.log(data2);
    }
    catch(error){
        console.log(error);
    }
}

getData();