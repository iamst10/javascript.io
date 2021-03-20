function Rat(name,weight,speed,state,speak) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.state = state;
    this.speak = speak; 
    this.getSpeak = function() {
        document.getElementById('result').innerHTML+=this.speak+'<br>';
    }
}
function Cat(name,weight,speed,state,speak) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.state = state;
    this.speak = speak; 
    this.getSpeak = function() {
        document.getElementById('result').innerHTML+=this.speak+'<br>';
    }
    this.getCacthRat = function(nameRat,nameCat) {
        if (nameCat.speed > nameRat.speed) { 
            return true;
            
        } return false;
    }
    this.getEatRat = function(nameRat,nameCat){
        if (this.getCacthRat(nameRat,nameCat)) {
            if ((nameRat.state === 'song')&&(nameCat.weight > nameRat.weight)) {
                document.getElementById('result').innerHTML += 'finished eating the mouse <br>';
            }
            else
                document.getElementById('result').innerHTML += 'Havent caught the mouse yet<br>';
        }
    }
}
let nameRat=' jerry';
let weightRat=5;
let speedRat=20;
let stateRat='song';
let speakRat='chit chit';
let jerry=new Rat(nameRat,weightRat,speedRat,stateRat,speakRat);

let nameCat = 'tom';
let weightCat=15;
let speedCat=25;
let stateCat='song';
let speakCat='meo meo';
let tom= new Cat(nameCat,weightCat,speedCat,stateCat,speakCat);

function meokeu(name) {
   //document.getElementById('result').innerHTML+=name.getSpeak+'<br>';
   name.getSpeak();
  //document.getElementById('result').innerHTML+="aaaaaaa";
}
function Batchuot(namerat, namecat) {
    namerat.getCatchRat(namerat, namecat);
}
function Anchuot(namerat, namecat) {
    namecat.getEatRat(namerat, namecat);
}