const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstpasswordEl= document.getElementById("firstpassword-el")
let secondpasswordEl= document.getElementById("secondpassword-el")
let passwordlength= 12;

generatepassword.addEventListener("click", function() {
function getrandompassword(){
    let randomchar= Math.floor(Math.random()* characters.length)
    return characters[randomchar]
}
function generatepassword(){
    let randompassword= ""
    for (let i=0; i<passwordlength; i++){
        randompassword +=getrandompassword()
    }
    return randompassword;
}
firstpasswordEl.textContent= "";
secondpasswordEl.textContent= "";
const generatedpassword1 = generatepassword()
const generatedpassword2 = generatepassword()
firstpasswordEl.textContent+= generatedpassword1
secondpasswordEl.textContent+= generatedpassword2
})