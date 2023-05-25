class character {
    constructor(Up, damage_point){
    this.level = 1;
    this.attack = null;
    this.defence = null;
    this.health = 100; 
    this.Up = levelUp;
    this.damage_point = damage(point);   
    }
}

function levelUp() {
    if (this.health > 0) {
        this.level += 1;
        this.attack = Math.round((this.attack ?? 0) * 1.2);
        this.defence = Math.round((this.defence ?? 0) * 1.2);
        this.health = 100;
      } else {
        this.health = 0;
        throw new Error('Нельзя повысить LVL умершего');
      }
      return;
    }

function damage(points) {
    if (this.health > 0) {
        this.health -= points * (1 - (this.defence ?? 0) / 100);
        this.health = this.health > 0 ? this.health : 0
    } else {
        this.health = 0;
        throw new Error('Помер');
    }
}