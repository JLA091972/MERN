class Ninja {
    constructor(name,health,speed,strength){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
        return this;
    }

    showStats(){
        console.log("health  : ", this.health);
        console.log("speed   : ", this.speed);
        console.log("strength: ", this.strength);
        return this;
    }

    drinkSake(){
        this.health += 10;
        console.log ("Kanpai!!");
        console.log("New stats for me:");
        this.showStats();
        return this;
        
    }
}

module.exports = Ninja;


const GoemonIshikawa = new Ninja ("AssasinNinja", 100, 100,100);

// GoemonIshikawa.showStats();
// GoemonIshikawa.drinkSake();
// GoemonIshikawa.showStats();