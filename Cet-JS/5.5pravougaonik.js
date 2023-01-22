/// Написати програм који за унето Н исписује квадрат

// *****
// *****
// *****
// *****
// *****

let N = 5
let red = ''
/// Ако не треба да буде квадрат онда се додаје let M = 6 и само у другој петљи иде друго слово за услов у другој петљи

for(let i = 0; i < N; i++){
    red += '*'
}

for(let i = 0; i < N; i++){
    console.log(red)
}



/// Написати програм за квадрат са звездицама, али само оквир квадрата
{
let N = 10
let M = 5
let poklopac = ''
let red = ''

for(let i = 0; i < N; i++){
    poklopac += '*'
}

red += '*'

for(let i = 0; i < N - 2; i++){
    red += ' '
}

red += '*'

console.log(poklopac)
for(let i = 0; i < M - 2; i++){
    
    console.log(red)
}

console.log(poklopac)


}