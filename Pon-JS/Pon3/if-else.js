{
    let r = 10
    if(r >= 0){
        let O, P;
        O = 2 * r * Math.PI;
        P = r * r * Math.PI;
        console.log(O, P)
    }
    else{
    console.log("крај програма")
    }
}

/// Дакле Гранања иду овако

{
    let b = 5;
    let c = 3;
    if(b > c){ /// ако услов да TRUE само онда ће ући у код под витичастом заградом и онда ће се извршити код у витичастој загради који следи
        console.log("Овај број под бе koji iznosi", b,"је већи од броја под цд који износи", c)
    }
    else{ // ако се добије горе за услов FALSE, онда се извршава ELSE
        console.log("Број није већи од", c)
    }
}
/// Следећи пример

{
    let x = 33

    if(x < 10){
        console.log("први случај")
    }
    else if(x < 15){
        console.log("Други случај")
    }
    else{
        console.log("Трећи случај")

    }
}

/// Гранања можемо да реализујемо и овако са SWITCH switch(x)
/// Switch ради само са троструко једнако


{
    let danUnedelji = 2
    switch(danUnedelji){
        case 1:
            console.log("Понедељак")
            break;
        case 2:
            console.log("Уторак")
            break;
        default:
            console.log("Није ни понедељак ни уторак")
            break;
    }
}


// На основу дана у недељи (задатак бројем) исписати да ли је викенд или радни дан
// 0 - 6 или


console.log("Задатак са радним данима урађен са if/else")
{
    let x = 2
    
    if(x <= 4){
        console.log("Данас је радни дан.")
    }
    else if((x == 5) || (x == 6)){
        console.log("Данас је викенд.")
    }
    else{
        console.log("Унос није добар, и мора да буде од 0 - 6.")

    }
}

console.log("Задатак са радним данима урађен са switch")

{
    let x = 5

    switch(x){
        case 1:
            console.log("Данас је радни дан.")
            break;
        case 2:
            console.log("Данас је радни дан.")
            break;
        case 3:
            console.log("Данас је радни дан.")
            break;
        case 4:
            console.log("Данас је радни дан.")
            break;
        case 5:
            console.log("Данас је радни дан.")
            break;
        case 6:
            console.log("Данас је викенд.")
            break;
        case 7:
            console.log("Данас је викенд.")
            break;
        default:
            console.log("Није добар унос")
            break;
    }
}


console.log("Браво за вежбање!!!")