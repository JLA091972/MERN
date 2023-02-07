

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
        console.log("health: ", this.health);
        console.log("speed: ", this.speed);
        console.log("strength: ", this.strength);
        return this;
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}


const GoemonIshikawa = new Ninja ("AssasinNinja", 100, 100,100);

GoemonIshikawa.showStats();