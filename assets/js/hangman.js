//====================================[Game init]=======================

const words = ["pomme", "banane", "fraise", "chocolat", "poire"];
const randomWord = words[Math.floor(Math.random() *words.length)];
const sizeRandomWord = randomWord.length;
let nberLtrs=''; 
let lettersSelectedHtml=''; 
let lettersSelected = [];
let compteurError = 0;

for(i=1; i<=sizeRandomWord; i++){
    nberLtrs +='<p class="ltrs wordLetter" id="lettre'+i+'"></p>';
}

document.getElementById('containerWordLetters').innerHTML = nberLtrs;
document.getElementById('mot').innerHTML = randomWord;

//====================================[User entre valeur]=======================


let userLetter = document.getElementById('userLetter');
let validValue = new RegExp("((?=.*[a-z])(?=.{1,}))");

document.getElementById('userLetter').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if(validValue.test(userLetter.value)){

            document.getElementById('label').innerHTML = 'Entré une lettre';
            letterExists();
        }else{
            document.getElementById('label').innerHTML = "Entré une lettre, pas de nombre, n'y de symbole";
        }
    }
});


//====================================[test si la valeur existe déjà]=======================

function letterExists (){
    if(lettersSelected.length === randomWord.length){ 
        alert("Game Win");
    }
    else if (lettersSelected.indexOf(userLetter.value) === -1){
        lettersSelected.push(userLetter.value);
        letterInWord ();
        letterUsed ();
    }
    else{
        document.getElementById('label').innerHTML="La lettre a déjà été utilisée";
    }
}


//====================================[test si la valeur est dans le mot]=======================

function letterInWord (){

    let letterExists = randomWord.indexOf(userLetter.value);

    if (letterExists != -1) {
        positionLetter();
    }else {
        compteur(); 
    }
}


//====================================[test si la valeur est plusieurs fois dans le mot et donne sa place dans le mot]=======================

function positionLetter (){

    for(i=0; i<randomWord.length;i++) {
        if (randomWord[i] === userLetter.value){
            document.getElementById('lettre'+(i+1)).innerHTML=userLetter.value;
        }
    }
}


//====================================[test et compteur d'erreur]=======================

function compteur (){

    if(compteurError===5){
        alert("Game over");
    }
    else{
        document.getElementById('compteur').innerHTML=(compteurError+=1);
    }
}


//====================================[afficher la lettre utilisé]=======================

function letterUsed (){
    
    lettersSelectedHtml += '<p class="ltrs letterPlay" >'+userLetter.value+'</p>';
    document.querySelector('.containerLettersPlay').innerHTML = lettersSelectedHtml ;
}
