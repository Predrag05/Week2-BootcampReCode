// На основу дана у недељи (задатак бројем) исписати да ли је викенд или радни дан
// 0 - 6 или


console.log("Задатак са радним данима урађен са if/else")
{
    let dan = 3
    
    if(dan <= 4 && dan >= 0){
        console.log("Данас је радни дан.")
    }
    else if(dan == 5 || dan == 6){
        console.log("Данас је викенд.")
    }
    else{
        console.log("Унос није добар, и мора да буде број од 0 - 6.")

    }
}

console.log("Задатак са радним данима урађен са switch")

{
    let dan = 5

    switch(dan){
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

console.log("Задаци други начин, урађен са Цвијаном IF/ELSE...............")


{
    let dan = 8

    if(dan >= 1 && dan <= 7){
        if(dan == 6 || dan == 7){
        console.log("Викенд")
    }
        
        else{
            console.log("Радни дан")
        }
        
    }
    else{
        console.log("Није валидан унос")
    }
}

console.log("Задаци други начин са SWITCH...............")

{
    let dan = -1

    switch(dan){
        case 0:
            console.log("Викенд")
            break;
        case 1:
            console.log("Радни дан")
            break;
        case 2:
            console.log("Радни дан") 
            break;
        case 3:
            console.log("Радни дан")
            break;
        case 4:
            console.log("Радни дан")
            break;
        case 5:
            console.log("Радни дан")
            break;
        case 6:
            console.log("Викенд")  
            break;
        default:
            console.log("Није добар унос.")
    }
}

console.log("Задаци други начин са SWITCH СКРАЋЕНО...............")

{
    let dan = 0
    switch(dan){
        case 0:
        case 6: // Дакле не морају да иду редом, нити сви да буду кејсеви по бројевима
                // Ово кад нема брејка се зове пропадање јер ће програм у свичу ићи на доле до бракеа и исписати оно у цонсоле логу пре брејка ако наиђе на тај кејс под неким бројем
            console.log("Викенд")
            break
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("Радни дан")
        default:
            console.log("Није добар унос")
            break

    }
}


console.log("На основу броја месеца написати који месец има колико дана урађен са SWITCH-ом")

// На основу броја месеца написати који месец има колико дана
// 0-11

{
    let mesec = 3
    
    switch(mesec){
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            console.log("Месец има 31 дан.")
            break
        case 1:
            console.log("Месец има 28 дана.")
            break
        case 3:
        case 5:
        case 8:
        case 10:
        
            console.log("Месец има 30 дана.")
            break
        default:
            console.log("Није валидан унос, мора да буде број месеца од 0 - 11")
            break
    }
}



console.log("Браво за вежбање!!!")