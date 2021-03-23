let Remote = function(id) {
    this.id=id;
    this.setPower = function(name) {
        if (name.power === 'on') {
            name.power = 'off';
        } else {
            name.power = 'on';
        }
    };
    this.setVolum = function (plus) {
        if (plus) {
            tivi.volum++;
        }
        else {
            tivi.volum--;
        }
    };
}
let Tivi = function(power, status, volum, channel) {
    this.power=power;
    this.volum=volum;
    this.channel=channel;
    this.status=status;
    this.getChannel= function() {
        this.channel=channel;
    };
    this.getStatus = function() {
        this.status = 'TV:' + this.power + 'Playing channel:' + this.channel + 'Volum:' + this.volum;
        return this.status;
    }
};

function turnonoff() {
    remote1.setPower(tivi);
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML += tivi.power + '<br>';
}

function Volum(plus) {
    if (tivi.power === 'on') {
    remote1.setVolum(plus);  
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML += 'volumn '+tivi.volum + '<br>';  
    } 
    else {
        printPoweroff();
    }
}

function setChannel(channel) {
    if (tivi.power === 'on') {
        tivi.getChannel(channel);
        checkstatus();
    }
    else {
        printPoweroff();
    }
}

function printPoweroff() {
    document.getElementById('result').innerHTML += 'TV ' + tivi.power;
}

function checkstatus() {
    if (tivi.power === 'on') {
    document.getElementById('result').innerHTML += tivi.getStatus() + '<br>';
    } 
    else {
    printPoweroff();
    }
}
let idRemote = 1;
let remote1 = new Remote(idRemote);
let statusTivi = '';
let channelTivi=2;
let volumTivi = 50;
let powerTivi = 'off';
let tivi = new Tivi(powerTivi, statusTivi, volumTivi, channelTivi);