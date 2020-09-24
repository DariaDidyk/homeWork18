class Squad {
    constructor(defaultResources) {
        this._squad = [];
        this.addResources(defaultResources); 
    }

    addResources(defaultResources) {
        this._squad = [...this._squad, ...defaultResources];
    }

    isReadyToMove() {
        return this._squad.some((unit) => unit.isReadyToMove());
    }

    isReadyToFight() {
        return this._squad.some((unit) => unit.isReadyToFight());
    }

    restore() {
        this._squad.forEach((unit) => unit.restore());
    }

    getReadyToMove() {
        return this._squad.filter(unit => unit.getReadyToMove());
    }

    getReadyToFight() {
        return this._squad.filter(unit => unit.getReadyToFight());
    }

    clone(unit) {
        return this._squad.map((unit) => unit.clone());
    }
}
