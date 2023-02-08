const Ninja = require("./ninja.js");

class Sensei extends Ninja {
    constructor(name) {
        super(name, 50,50,50);
            this.wisdom = 10;
        
    }

    speakWisdom(){
        this.health += 10;
        this.strength += 5;
        this.showStats();
    }
}

const Splinter = new Sensei("Master Rat", 100,100,100,100);

Splinter.speakWisdom();
