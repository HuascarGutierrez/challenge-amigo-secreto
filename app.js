// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//input ID: amigo

/**requirements
 * validateName: not empty input
 * addName: insert the input into an array
 * visualizeList: autoUpdate
 * randomSorteo: sortearAmigo button, select a random friend from the list.
 */

//global variables

let friends = []

const validateName = (name) => {
    //it will tell us if its empty or not
    return name == '' ? false : true; 
}

const clearInput = (inputID) => {
    document.getElementById(inputID).value = '';
}

const agregarAmigo = () => {
    const inputName = document.getElementById('amigo').value;
    const isNameCorrect = validateName(inputName);
    
    if(isNameCorrect) {
        
        friends.push(inputName)
        console.log(friends)
        clearInput('amigo')

    } else {
        alert('Por favor, inserte un nombre.')
    }
}