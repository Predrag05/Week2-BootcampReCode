/// Израчунати производ првих N природних бројева

{
    let N = 5
    let i = 1
    let proizvod = i

    for(i; i <= N; i++){
        proizvod *= i
    }
    console.log(proizvod)
}