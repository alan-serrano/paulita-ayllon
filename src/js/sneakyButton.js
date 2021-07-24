document.addEventListener('DOMContentLoaded', ()=> {
    const sneakyButtons = document.getElementsByClassName('sneakyButton');
    const acceptButton = document.querySelector('.acceptBtn');
    const form = document.querySelector('.pregunta form');
    // form.appendChild
    if(form) form.addEventListener('submit', onSubmit);

    // if(acceptButton) {
    //     acceptButton.addEventListener('click', onClickAccept)
    // }

    for (const sneakyButton of sneakyButtons) {
        sneakyButton.addEventListener('click', goSneaky);
        sneakyButton.addEventListener('mouseover', goSneaky);
        console.log(sneakyButton)
    }


    function onSubmit(e) {
        e.preventDefault();
    }

    function onClickAccept(e) {
        location.assign('/si.html')
    }
    
    function goSneaky({currentTarget}) {
            const xPosition = randomIntFromInterval(10, 90);
            const yPosition = randomIntFromInterval(10, 90);
    
            // Getting styles random position
            currentTarget.style.position = 'fixed';
            currentTarget.style.top = `${xPosition}%`;
            currentTarget.style.left = `${yPosition}%`

            // Changing emoji of sneaky button
            const iconSneakySad = currentTarget.querySelector('.icon.sad');
            const iconSneakySmiling = currentTarget.querySelector('.icon.smiling');
            iconSneakySad.classList.add('hidden');
            iconSneakySmiling.classList.remove('hidden');

    }
    
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
})

