

function length (){
    var charactersLength = window.prompt("How many characters your password must have. (from 8 up to 128)");

    if (charactersLength<8 || charactersLength>128){
        window.alert ("Incorrect password character length. Plase try again");
        length();
    } 
    
}
length();




