// import services and utilities
import { getRandomItem } from './utils.js';
import state, { addGoblin } from './state.js';
// import component creators
import createCharacter from './components/Character.js';
import createAddGoblin from './components/AddGoblin.js';
import createGoblins from './components/Goblins.js';
import createMessage from './components/Message.js';
// import state and dispatch functions

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const CreateMessage = createMessage(document.getElementById('message'));
const CreateCharacter = createCharacter(document.getElementById('character-display'));
const CreateGoblins = createGoblins(document.getElementById('goblins-display'));

const CreateAddGoblin = createAddGoblin(document.querySelector('form'), {
    handleAddGoblin: (name) => {
        const goblin = {
            name,
            points: getRandomItem(state.goblinPoints),
            defeated: false
        };
        addGoblin(goblin);
        display();
    }
});

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    CreateMessage({ message: state.message });
    CreateCharacter({ healthPoints: state.healthPoints });
    CreateGoblins({ goblins: state.goblins });
    CreateAddGoblin();

}

// Call display on page load
display();
