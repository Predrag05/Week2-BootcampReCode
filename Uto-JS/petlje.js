/// Написати програм који 5 пута исписује Hello World!

// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");

/// while, for, do-while
/// синтакса за    while(uslov){console.log()}
let N = 5 // 5 4 3 2 1
while(N > 0){
    console.log("Hello World!")
    N--
}

/// синтакса за    for

console.log("ДРУГИ ///////////// Hello World! САМО СА FOR")

{
    let N = 5
    for(let i = 0; i < N; i++){
        console.log("Hello World!")
    }
}

/// Написати програм који исписује бројеве од 1 до N, укључујући оба броја

/// Ово прво је са    for
{
    let N = 21
    for(let i = 1; i <= N; i++){
        console.log(i)
    }
}

/// Може и овако

{
    let N = 21
    for(let i = 1; i <= N; i += 2){
        console.log(i)
    }
}
/// Овај исти задатак са    while

{
    let N = 21
    let x = 1
    while(x <= N){
        console.log(x)
        x++
    }
}


{
    let M = 13
    let N = 123
    let i = M

    while(i <= N){
        if(i < 50){
            console.log(i)
        }
        else{
            console.log("Овај број је већи од 50")
        }
        
        i++
    }
    console.log(`Ово су били бројеви од ${M} до ${N}`)
}


console.log("БРАВО ПРЕДРАЖЕ ЗА ОВО ВЕЖБАЊЕ")