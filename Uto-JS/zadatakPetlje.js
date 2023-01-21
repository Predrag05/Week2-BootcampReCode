/// Исписати бројеве од M до N, дељиве са 3

{
    let M = 1
    let N = 27

    while(M <= N){
        if(M % 3 === 0){
            console.log(M)
        }
        M++
    }
}

{
    let M = 1
    let N = 27

    for(let i = M; i <= N; i++){
        if(i % 3 === 0){
            console.log(i)
        }
    }
}



console.log("БРАВО ПРЕДРАЖЕ ЗА ОВО ВЕЖБАЊЕ")