const units = [
    new Unit('Warrior', 200, 500, 800, 'https://i.pinimg.com/originals/02/eb/38/02eb38fbe71a52053e65b3f6e014d7f7.jpg'),
    new Unit('Magician', 200, 500, 400, 'https://i.pinimg.com/originals/d4/4a/94/d44a94b956d7a3e4c65a926bbbc0af74.jpg'),
    new Unit('Archer', 200, 500, 600, 'https://i.pinimg.com/originals/65/ea/bd/65eabdc398ffc299839eb8fceec26105.jpg')
]

console.log(units);

const squad = new Squad(units);
console.log(squad);

const body = document.querySelector('body');
body.setAttribute('class', 'body'); 

units.map((unit) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'div');
    div.style.textAlign = 'center';
    document.body.appendChild(div);
    
    const paragraphHealth = document.createElement('p');
    paragraphHealth.textContent = `Health: ${unit.health}`;
    paragraphHealth.setAttribute('class', 'para');
    div.appendChild(paragraphHealth);
    
    const paragraphStamina = document.createElement('p');
    paragraphStamina.textContent = `Stamina: ${unit.stamina}`; 
    paragraphStamina.setAttribute('class', 'para');
    paragraphStamina.style.backgroundColor = 'orange';
    div.appendChild(paragraphStamina);
    
    const chatacterType = document.createElement('h2');
    chatacterType.textContent = unit.type;
    chatacterType.setAttribute('class', 'character');
    div.appendChild(chatacterType);
    
    const image = document.createElement('img');
    image.setAttribute('src', unit.image);
    image.setAttribute('alt', 'warrior');
    image.style.width = '110px';
    image.style.height = '150px';
    image.style.border = '5px solid aqua';   
    div.appendChild(image);
})


