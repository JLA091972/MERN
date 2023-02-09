class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power,resiliency){
        super (name,cost);
        this.power= power;
        this.resiliency = resiliency;
    }

    attack (target){
        console.log(this.name, " attacking ", target.name);
        this.resiliency -= this.power;
        return this;
    }

    showstatus (){
        console.log("Name      : ", this.name);
        console.log("Cost      : ", this.cost);
        console.log("Power     : ", this.power);
        console.log("Resiliency: ", this.resiliency);
        return this;
    }
}

class Effects extends Card {
    constructor (name, cost, text, stat, magnitude){
        super (name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    duel(target) {
        if (this.name == HardAlgorithm) {
            console.log(target.name,"hit with ",this.name);
            console.log(this.text);
            target.resiliency += 3;
            target.magnitude += this.magnitude;
            this.cost = 3;
        }
        if (this.name == UnhandledPromiseRejection){
            console.log(target.name,"hit with ",this.name);
            console.log(this.text);
            target.resiliency -= 2;
            target.magnitude += this.magnitude;
            this.cost = 1;
        }
        if (this.name == PairProgramming){
            console.log(target.name,"hit with ",this.name);
            console.log(this.text);
            target.power += 2;
            target.magnitude += this.magnitude;
            this.cost = 3;
        }
    }
    showstatus (){
        console.log("Name      : ", this.name);
        console.log("Cost      : ", this.cost);
        console.log("Power     : ", this.power);
        console.log("Resiliency: ", this.nResiliency);
        return this;
    }
    

}

const HardAlgorithm = new Card ("HardAlgorithm", 2);
const UnhandledPromiseRejection = new Card ("UnhandledPromiseRejection", 1);
const PairProgramming = new Card ("PairProgramming", 3);

console.log ("\n!! Turn 1 !!\n")
const RedBeltNinja = new Unit ("RedNinja", 3,3,4).showstatus();
const duel1 = new Effects(HardAlgorithm, 2, "increase target's resilience by 3",3);
console.log ("Duel on RedBeltNinja!!!")
duel1.duel(RedBeltNinja);
RedBeltNinja.showstatus();


console.log ("\n!! Turn 2 !!\n")
const BlackBeltNinja = new Unit ("BlackNinja",4,5,4).showstatus();
const duel2 = new Effects(UnhandledPromiseRejection, 1, "reduce target's resilience by 2", -2);
duel2.duel(RedBeltNinja);
RedBeltNinja.showstatus();

console.log ("\n!! Turn 3 !!\n");
const duel3 = new Effects(PairProgramming, 3, "increase target's power by 2", 2);
duel3.duel(RedBeltNinja);
RedBeltNinja.showstatus();

console.log ("\nRed Belt Ninja Attacks Black Belt Ninja!!");
RedBeltNinja.attack(BlackBeltNinja);
console.log("Red Belt Ninja Status")
RedBeltNinja.showstatus();
console.log("Black Belt Ninja Status");
BlackBeltNinja.showstatus();