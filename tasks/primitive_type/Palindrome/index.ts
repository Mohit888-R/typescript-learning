let text : string ="raDaR" ;

let start : number = 0, end : number = text.length-1;

text = text.toLowerCase();
function palindrome(){
    while(start< end){
        if(text[start] === text[end]){
            start++;
            end--;
        }else{
            console.log("not palindrome")
            break;
        }
    }    
    console.log("Palindrome")
}

palindrome();
