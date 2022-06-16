import state, {
    initialize,
    addGoblin
    // import dispatch functions
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('initialized state object', (expect) => {
    expect.deepEqual(state, {
        message: '',
        goblins: [
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
        ],
        goblinPoints: [1, 2, 2, 2, 3, 3, 3, 3, 4, 4],
        healthPoints: 10
    });
});

test('adds goblin to goblins array', (expect) => {
    const goblin = {
        name: 'Brandon',
        points: 3,
        defeated: false
    };
    addGoblin(goblin);
    expect.deepEqual(state.goblins, [
        {
            name: "B. Gobblin'",
            points: 2,
            defeated: false
        },
        {
            name: 'Frank',
            points: 4,
            defeated: false
        },
        {
            name: 'Brandon',
            points: 3,
            defeated: false
        }
    ]);
});
