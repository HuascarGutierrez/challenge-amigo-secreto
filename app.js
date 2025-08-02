// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//input ID: amigo

/**requirements
 * validateName: not empty input
 * addName: insert the input into an array
 * visualizeList: autoUpdate
 * randomSorteo: sortearAmigo button, select a random friend from the list.
 */

//global variables

let friends = [];

const inputID = 'amigo';
const listaAmigoID = 'listaAmigos';
const resultadoID = 'resultado';

//functions

const validateName = (name) => {
    //it will tell us if its empty or not
    return name == '' ? false : true; 
}

const clearInput = (id) => {
    document.getElementById(id).value = '';
}

const isListEmpty = () => {
    return friends.length === 0 ? true : false;
}

const updateList = (name) => {
    // check if that name is already in list
    if (friends.includes(name)) {
        alert("Ese amigo ya esta en la lista");
    } else {

        //instead using for, I prefer to push it and also add it to the list, for better performance (even if it's minimum)
        friends.push(name);

        const listOfFriends = document.getElementById(listaAmigoID);

        const listItem = document.createElement("li");
        listItem.textContent = name;

        listOfFriends.appendChild(listItem);
    }

}

const agregarAmigo = () => {
    const inputName = document.getElementById(inputID).value;
    const isNameCorrect = validateName(inputName);
    
    if(isNameCorrect) {
        
        updateList(inputName);

        clearInput(inputID);
        

    } else {
        alert('Por favor, inserte un nombre.');
    }
}

const sortearAmigo = () => {
    if(isListEmpty()) {
        alert('No hay amigos en tu lista, agrega un amigo')
    
    } else {
        const randomIndex = Math.floor(Math.random() * friends.length);
        const secretFriend = friends[randomIndex];

        const result = document.getElementById(resultadoID);
        
        const resultFriend = document.createElement('li');
        resultFriend.textContent = secretFriend;

        result.replaceChildren(resultFriend)
    }
}