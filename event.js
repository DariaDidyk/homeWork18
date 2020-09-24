
function changeHealth(event) {
    const paragraphHealth = this;
    const healthString = paragraphHealth.innerText.replace("Health: ", '')
    if (+healthString > 0) {
        paragraphHealth.textContent = `Health: ${+healthString - 20}`;
        console.log(paragraphHealth.textContent);
    }  
}

function changeStamina(event) {
    const paragraphStamina = this;
    const staminaString = paragraphStamina.innerText.replace("Stamina: ", '')
    if (+staminaString > 0) {
        paragraphStamina.textContent = `Stamina: ${+staminaString - 20}`;
        console.log(paragraphStamina.textContent);
    } 
}

const bars = document.querySelectorAll('p');

bars.forEach((bar) => {
    bar.addEventListener('click', changeHealth);
    console.log(changeStamina);
})

bars.forEach((bar) => {
    bar.addEventListener('click', changeStamina);
})
