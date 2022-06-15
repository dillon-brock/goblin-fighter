// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    state.message = '';
    state.goblins = [
        {
            name: "B. Gobblin'",
            points: 2,
            defeated: false
        },
        {
            name: 'Frank',
            points: 4,
            defeated: false
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