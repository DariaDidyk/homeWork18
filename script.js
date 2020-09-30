const units = [
    new Unit('Warrior', 100, 100, 'https://i.pinimg.com/originals/02/eb/38/02eb38fbe71a52053e65b3f6e014d7f7.jpg'),
    new Unit('Magician', 100, 100, 'https://i.pinimg.com/originals/d4/4a/94/d44a94b956d7a3e4c65a926bbbc0af74.jpg'),
    new Unit('Archer', 100, 100, 'https://i.pinimg.com/originals/65/ea/bd/65eabdc398ffc299839eb8fceec26105.jpg')
]

console.log(units);

const squad = new Squad(units);
console.log(squad);

const body = document.querySelector('body');
body.setAttribute('class', 'body'); 



