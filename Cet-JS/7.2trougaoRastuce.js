// {
//     let N = 5
//     // let M = 1

//     for(let i = 0; i < N; i++){
//         let red = ''
//         for(let j = 0; j < N; j++){
//             red += '*'
//         }
//         console.log(red)
//     }

// }

{
    let N = 9
    let count = 1
    let M = N

    while(N >= count){
        let space = ' '.repeat(M - count)
        let zvezdica = '*'.repeat(count)

        let deszve = '*'.repeat(count)
        let desspace = ' '.repeat(M - count)
        let red = space + zvezdica + ' ' + deszve + desspace

        console.log(red)
        count++


    }
}

{
    let N = 9
    let i = 1
    let M = N

    for(i; i <= N; i++){
        let space = ' '.repeat(M - i)
        let zvezdica = '*'.repeat(i)

        let deszve = '*'.repeat(i)
        let desspace = ' '.repeat(M - i)
        let red = space + zvezdica + ' ' + deszve + desspace

        console.log(red)

    }
}

{
    let N = 9
    let M = N

    for(let i = 1; i <= N; i++){
        let zve = '*'
        let space = ' '
        let red = space.repeat(M - i) + zve.repeat(i) + ' ' + zve.repeat(i)
        console.log(red)
    }
}



console.log("Браво Предраже за ово вежбање!!!")