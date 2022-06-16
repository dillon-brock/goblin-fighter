// import services and utilities
import { getRandomItem } from './utils.js';
import state, { addGoblin, updateGoblin, setMessage } from './state.js';
// import component creators
import createCharacter from './components/Character.js';
import createAddGoblin from './components/AddGoblin.js';
import createGoblins from './components/Goblins.js';
import createMessage from './components/Message.js';
import createDefeatedGoblins from './components/DefeatedGoblins.js';

const damage = [0, 0, 1, 1, 1, 1, 2];

const CreateMessage = createMessage(document.getElementById('message'));
const CreateDefeatedGoblins = createDefeatedGoblins(document.getElementById('defeated-goblins'));
const CreateCharacter = createCharacter(document.getElementById('character-display'));
const CreateGoblins = createGoblins(document.getElementById('goblins-display'), {
    
});

const CreateAddGoblin = createAddGoblin(document.querySelector('form'), {
    handleAddGoblin: (name) => {
        const goblin = {
            name,
            points: getRandomItem(state.goblinPoints),
            get defeated() {
                return this.points <= 0;
            }
        };
        addGoblin(goblin);
        display();
    }
});

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    CreateMessage({ message: state.message });
    CreateDefeatedGoblins({ goblins: state.goblins });
    CreateCharacter({ healthPoints: state.healthPoints });
    CreateGoblins({ goblins: state.goblins });
    CreateAddGoblin();

}

// Call display on page load
display();
