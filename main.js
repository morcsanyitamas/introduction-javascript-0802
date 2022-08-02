function findIndex(numbers, value){
    let index = 0;
    for(; index < numbers.length; index++){
        if(numbers[index] === value){
            return index;
        }
    }
}

function main(){
    let number = 10;
    const char = 'c';

    number = 15;
    const numbers = [10, 20, 30, 40, 50, 60];
    
    numbers[0] = 100;
    console.log(numbers[0]);
    
    // char = 'b';

    // console.log(number);
    // console.log(char);

    // for(let index = 0; index < numbers.length; index++){
    //     console.log(numbers[index]);
    // }

    // let index = 0;
    // while(index < numbers.length){
    //     console.log(numbers[index]);
    //     index++;
    // }

    // let index = 0;
    // do {
    //     console.log(numbers[index]);
    //     index++;
    // } while(index < numbers.length);

    // let word = "word";
    // for(let char of word){
    //     console.log(char);   
    // }

    // if (number === 15){
    //     console.log("number = 15");
    // } else if (number === 14) {
    //     console.log("number = 14");
    // } else {
    //     console.log("number != 15");
    // }

    // switch(number){
    //     case 15:
    //         console.log("number = 15");
    //         break;
    //     case 14:
    //         console.log("number = 14");
    //         break;
    //     default:
    //         console.log("number != 15");
    //         break;
    // }

    

    console.log(findIndex(numbers, 30));
}

main();