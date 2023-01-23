/// Исписати 100 бројева који нису дељиви са 13

{
    let count = 0
    let i = 1

    while(true){
        if(i % 13 !== 0){
            console.log(i)
            count++
        }
        if(count === 100){
            break
        }
        i++
    }
}


{
    for(let count = 0, i = 1; true; i++){
        if(i % 13 !== 0){
            console.log(i)
            count++
        }
        if(count === 100){
            break
        }
    }
}

{
    for(let count = 0, i = 1; count !== 100; i++){
        if(i % 13 !== 0){
            console.log(i)
            count++
        }
        
    }
}


/// Continue

{
    for(let i = 0; i < 100; i++){
        if(i % 3 == 0){
            continue
        }
        console.log(i)
    }
}
console.log("БРАВО ПРЕДРАЖЕ")