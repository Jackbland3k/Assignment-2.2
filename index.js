function palindrome(){
    var input = document.querySelector("#UserInput");
    var I = input.value;
    var RI = "";

    for(var i = I.length -1; i >= 0; i--){
        RI += I[i];
    }
    var Result;
    if( I === RI){
    Result = "This integer is a palindrome!";
    }
    else{
    Result = "This integer is not a palindrome.";
    }

    document.querySelector("#NI").innerHTML = Result;
    }