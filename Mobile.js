Mobie = function (name, power, battery, draftBox, inputBox, outBox) {
    this.name = name;
    this.power = power;
    this.battery = battery;
    this.draftBox = draftBox;
    this.inputBox = inputBox;
    this.outBox = outBox;

    this.getPower = function () {
        let powerMobie = document.getElementById('power' + this.name);
        if (this.power === 'On power') {
            this.power = 'Off power';
        } else {
            this.power = 'On power';
        }
        if (this.power === 'On power') {
            powerMobie.innerHTML = 'On power';
        } else {
            powerMobie.innerHTML = 'Off power';
        }
    };
    let screenMobie = document.getElementById("screen" + this.name);
    this.getBattery = function () {
        if (this.power === "On power") {
            screenMobie.value = "Mobie On battery: " + this.battery + " %";
            this.battery--;
        } else {
            screenMobie.value ="Mobie off";
        }
    };
    this.getdraftBox = function () {
        if (this.power === 'On power') {
            if (this.battery > 0) {
                screenMobie.value = "";
                screenMobie.setAttribute("placeholder", "texting");
                screenMobie.removeAttribute("readonly");
                this.battery--;
            } else {
                screenMobie.value = "out of battery";
            }
        } else {
            screenMobie.value = "Mobie off";
        }
    };
    this.sendMessage = function () {
        if (this.power === 'On power') {
            if (this.battery > 0) {
                if (screenMobie.value !== "") {
                    this.outBox.push(screenMobie.value);
                    screenMobie.value = "";
                    this.battery--;
                }
            } else {
                screenMobie.value = "out of battery";
            }
        } else {
            screenMobie.value = "Mobie off";
        }
    };
    this.getoutBox = function () {
        if (this.power === 'On power') {
            if (this.battery > 0) {
                screenMobie.value = "";
                screenMobie.setAttribute("placeholder", "texting");
                screenMobie.removeAttribute("readonly");
                for (let i = 0; i < this.outBox.length; i++) {
                    screenMobie.value += this.outBox[i]+'\n';
                    this.battery--;
                }
            } else {
                screenMobie.value = "out of battery";
            }
        } else {
            screenMobie.value = "Mobie off";
        }
    }
    this.getinputBox = function () {
        if (this.power === 'On power') {
            if (this.battery > 0) {
                screenMobie.value = "";
                screenMobie.setAttribute("placeholder", "texting");
                screenMobie.removeAttribute("readonly");
                for (let i = 0; i < this.inputBox.length; i++) {
                    screenMobie.value += this.inputBox[i]+'\n';
                    this.battery--;
                }
            } else {
                screenMobie.value = "out of battery";
            }
        } else {
            screenMobie.value = "Mobie off";
        }
    }
}

let nameNokia = "Nokia";
let powerNokia = "Off power";
let batteryNokia = 100;
let draftBoxNokia = "";
let inputBoxNokia = [];
let outBoxNokia = [];
let Nokia = new Mobie(nameNokia, powerNokia, batteryNokia, draftBoxNokia, inputBoxNokia, outBoxNokia);
let nameIphone = "Iphone";
let powerIphone = "Off power";
let batteryIphone = 100;
let draftBoxIphone = "";
let inputBoxIphone = [];
let outBoxIphone = [];
let Iphone = new Mobie(nameIphone, powerIphone, batteryIphone, draftBoxIphone, inputBoxIphone, outBoxIphone);

function onoffpower(name) {
    name.getPower();
}

function Battery(name) {
    name.getBattery();
}

function DraftBox(name) {
    name.getdraftBox();
}
function chekoutBox(name) {
    name.getoutBox();
}
function chekinputBox(name) {
    name.getinputBox();
}
function SendMessage(name) {
    name.sendMessage();
    switch (name) {
        case (Nokia):
            Iphone.inputBox = Nokia.outBox;
            break;
        case (Iphone):
            Nokia.inputBox = Iphone.outBox;
            break;
    }
}