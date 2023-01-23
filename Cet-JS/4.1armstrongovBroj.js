/// Одредити да ли је задат троцифрени број Армстронгов број
/// 153 је један Армстронгов број а то значи да је
/// 153 = 1^3 + 5^3 + 3^3 

// let x = 153

// let j = x % 10
// let d = Math.floor(x / 10) % 10
// let s = Math.floor(x / 100) % 10

// let zbir = j ** 3 + d ** 3 + s ** 3

// if(zbir === x){
//     console.log("Jeste")
// }
// else{
//     console.log("nije")
// }


let x = 153
let zbir = 0
let tmp = x

while(x !== 0){
    let c = x % 10
    x = Math.floor(x / 10)
    zbir += c ** 3

}

console.log(zbir)

if(tmp === zbir){
    console.log("Jeste")
}
else{
    console.log("nije")
}


// x = Math.floor(x / 10)
// console.log(x)

// Math.pow(2,3)
// console.log(Math.pow(2,3))