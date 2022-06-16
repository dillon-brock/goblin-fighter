// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    state.message = '';
    state.goblins = [
        {
            name: "B. Gobblin'",
            points: 2,
            get defeated() {
                return this.points <= 0;
            }
        },
        {
            name: 'Frank',
            points: 4,
            get defeated() {
                return this.points <= 0;
            }
        }
    ];
    state.goblinPoints = [1, 2, 2, 2, 3, 3, 3, 3, 4, 4];
    state.healthPoints = 10;
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
export function addGoblin(goblin) {
    state.goblins.push(goblin);
}

export function setMessage(message) {
    state.message = message;
}

export function fightMessage(damage, fighter, goblin) {
    if (fighter === 'user') {
        !damage ? setMessage(`You tried to hit ${goblin} but missed!`) : setMessage(`You hit ${goblin} for ${damage} damage`);
    }
    else {
        !damage ? setMessage(`${goblin} tried to hit you but missed!`) : setMessage(`${goblin} hit you for ${damage} damage`);
    }
}

export function updateGoblin(goblin) {
    const index = state.goblins.indexOf(goblin);
    if (index !== -1) {
        state.goblins[index] = goblin;
    }
}