import state, {
    initialize,
    addGoblin,
    setMessage,
    updateGoblin,
    fightMessage,
    damageGoblin,
    damageUser
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
        ],
        goblinPoints: [1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5],
        healthPoints: 10
    });
});

test('adds goblin to goblins array', (expect) => {
    const goblin = {
        name: 'Brandon',
        points: 3,
        get defeated() {
            return this.points <= 0;
        }
    };
    addGoblin(goblin);
    expect.deepEqual(state.goblins, [
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
        },
        {
            name: 'Brandon',
            points: 3,
            get defeated() {
                return this.points <= 0;
            }
        }
    ]);
    expect.equal(state.message, 'You challenged Brandon! HP: 3');
});

test('sets message', (expect) => {
    state.message = '';
    setMessage('this is a message');
    expect.equal(state.message, 'this is a message');
});

test('updates goblin in goblin array', (expect) => {

    const goblin = state.goblins[0];
    goblin.points--;
    updateGoblin(goblin);
    expect.deepEqual(state.goblins, [{
        name: "B. Gobblin'",
        points: 1,
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
    }]);
});

test('sets message based on damage in fight', (expect) => {
    state.message = '';
    fightMessage(1, 'user', 'Frank');
    expect.equal(state.message, 'You hit Frank for 1 damage');
    fightMessage(2, 'goblin', 'Bartleby');
    expect.equal(state.message, 'Bartleby hit you for 2 damage');
    fightMessage(0, 'user', 'Frank');
    expect.equal(state.message, 'You tried to hit Frank but missed!');
    fightMessage(0, 'goblin', 'Bartleby');
    expect.equal(state.message, 'Bartleby tried to hit you but missed!');
});

test('goblin damaged in fight', (expect) => {
    const goblin = {
        name: 'Frank',
        points: 4,
        get defeated() {
            return this.points <= 0;
        }
    };
    damageGoblin(2, goblin);
    expect.equal(goblin.points, 2);
});

test('user damaged in fight', (expect) => {
    damageUser(2);
    expect.equal(state.healthPoints, 8);
});