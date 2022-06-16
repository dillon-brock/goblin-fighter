// import services and utilities
import state from './state.js';
// import component creators
import createCharacter from './components/Character.js';
// import state and dispatch functions

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const CreateCharacter = createCharacter(document.getElementById('character-display'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    CreateCharacter({ healthPoints: state.healthPoints });
}

// Call display on page load
display();
