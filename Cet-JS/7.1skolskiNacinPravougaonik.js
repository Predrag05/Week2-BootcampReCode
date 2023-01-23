{   
    let N = 10
    let M = 5

    for(let i = 0; i < M; i++){
        let red = ''
        for(let j = 0; j < N; j++){
            red += '*'
        }
        console.log(red)
    }
}

console.log("-----------------------")
{   
    let N = 10
    let M = 5

    for(let i = 0; i < N; i++){
        let red = ''
        for(let j = 0; j < M; j++){
            red += '*'
        }
        console.log(red)
    }
}

console.log("-----------------------")
{   
    let N = 10
    // let M = 5

    for(let i = 0; i < N; i++){
        let red = ''
        for(let j = i; j < N; j++){
            red += '*'
        }
        console.log(red)
    }
}

