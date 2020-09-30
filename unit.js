class Unit {
    constructor(type, health, distance, image) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
        this.image = image;
        this.init();
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
    init() {
        const div = document.createElement('div');
        div.setAttribute('class', 'div');
        div.style.textAlign = 'center';
        document.body.appendChild(div);
        
        const paragraphHealth = document.createElement('p');
        paragraphHealth.textContent = `Health: ${this.health}`;
        paragraphHealth.setAttribute('class', 'para');
        paragraphHealth.style.width = `${this.health} %`
        div.appendChild(paragraphHealth);
        
        const paragraphStamina = document.createElement('p');
        paragraphStamina.textContent = `Stamina: ${this.distance}`; 
        paragraphStamina.setAttribute('class', 'para');
        paragraphStamina.style.backgroundColor = 'orange';
        div.appendChild(paragraphStamina);
        
        const chatacterType = document.createElement('h2');
        chatacterType.textContent =this.type;
        chatacterType.setAttribute('class', 'character');
        div.appendChild(chatacterType);
        
        const image = document.createElement('img');
        image.setAttribute('src', this.image);
        image.setAttribute('alt', 'warrior');
        image.style.width = '105px';
        image.style.height = '150px';
        image.style.border = '5px solid #9400D3';   
        div.appendChild(image);

        paragraphHealth.addEventListener('click',() => {
            paragraphHealth.style.width = `${this.health = this.health - 10}%`;
            paragraphHealth.innerText = this.health;
            if (this.health <= 0 ) {
                paragraphHealth.style.width = '100%';
                paragraphHealth.setAttribute('class', 'disabled');
                div.style.backgroundColor = 'grey';
                div.style.pointerColor = 'none';
            }
            console.log(this.health)

        })

        paragraphStamina.addEventListener('click',() => {
                if (this.health <= 0  || this.distance <= 0) {
                paragraphStamina.style.width = '100%';
                paragraphStamina.style.backgroundColor ='#696969';
                paragraphStamina.setAttribute('class', 'disabled');
            } else{
                paragraphStamina.style.width = `${this.distance = this.distance - 10 }%`;
                paragraphStamina.innerText = this.distance;
            }
            console.log(this.distance)
        })
    }
}