function prime(num){

var count = 0;

    for(let i=0;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }

    if(count>1){
        console.log(num+" "+"-"+" "+"Prime")
    }
    else{
        console.log("Not Prime");
    }
}

let num = 5;

prime(num);