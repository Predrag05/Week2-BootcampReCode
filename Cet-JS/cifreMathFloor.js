let x = 123

let j = x % 10
console.log(j) /// j = 3

let d = Math.floor(x / 10) % 10
console.log(d)

let s = Math.floor(x / 100) % 10 /// Да има десец цифара за сваку следећу цифру би додали по једну десетицу у овом формату let s = Math.floor(x / (10 * 10) % 10 а нпр. да има 4 цифре скратили би га са let s = Math.floor(x / (10 * 10 * 10) % 10 и извукли би само тај последњи број који нам треба, а последњу цифру увек добијамо са %10  на крају

/// Одредити да ли је задат троцифрени број Армстронгов број
/// 153 = 1^3 + 5^3 + 3^3

console.log(s)
