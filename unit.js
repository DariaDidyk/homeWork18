class Unit {
    constructor(type, health, distance, stamina, image) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
        this.stamina = stamina;
        this.image = image;
    }
    isReadyToMove() {
        return this.distance > 0;
    }
    isReadyToFight() {
        return this.health > 0;
    }
    restore() {
        this.health = this.maxHealth;
        this.distance = this.maxDistance;
    }
    clone() { 
        return new Unit(this.type, this.maxHealth, this.maxDistance);
    }
}