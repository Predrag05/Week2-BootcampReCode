let N = 10
let M = 5

let pokolopac = '*'.repeat(N)
let red = '*' + ' '.repeat(N - 2) + '*'

console.log(pokolopac)
for(let i = 0; i < M - 2; i++){
    console.log(red)
}
console.log(pokolopac)


