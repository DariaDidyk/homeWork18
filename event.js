
function changeHealth(event) {
    const paragraphHealth = this;
    const healthString = paragraphHealth.innerText.replace("Health: ", '')
    if (+healthString > 0) {
        paragraphHealth.textContent = `Health: ${+healthString - 20}`;
        
    } else {
        paragraphHealth.setAttribute("class", "disabled");
    }
}

const healthBars = document.querySelectorAll('p');

healthBars.forEach((bar) => {
    bar.addEventListener('click', changeHealth);
})






function changeStamina(event) {
    const paragraphStamina = this;
    const staminaString = paragraphStamina.innerText.replace("Stamina: ", '')
    if (+staminaString > 0) {
        paragraphStamina.textContent = `Stamina: ${+staminaString - 20}`;
        
    } else {
        paragraphStamina.setAttribute("class", "disabled");
    }
}

const staminaBars = document.querySelectorAll('p');

staminaBars.forEach((bar) => {
    bar.addEventListener('click', changeStamina);
})