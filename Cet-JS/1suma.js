/// Мало потсећање наредбе да се СТРИНГ ПРЕБАЦИ У БРОЈ
{
    let x = "5"
    console.log(1+x)
    console.log(1 + Number("5"))
    console.log(1 + Number(x))
}

/// Израчунати суму првих N природних бројева

let N = 10
let suma = 0

for(let i = 0; i <= N; i++){
    suma += i
}
console.log(suma)


console.log("БРАВО ПРЕДРАЖЕ ЗА ОВО ВЕЖБАЊЕ")