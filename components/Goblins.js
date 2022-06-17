export default function createGoblins(root, { handleFightGoblin, handleGameOver }) {

    return ({ goblins, healthPoints }) => {

        root.innerHTML = '';

        for (const goblin of goblins) {
            root.append(Goblin({ goblin, healthPoints, handleFightGoblin, handleGameOver }));
        }
    };

}

export function Goblin({ goblin, healthPoints, handleFightGoblin, handleGameOver }) {

    const div = document.createElement('div');
    div.classList.add('goblin');

    const name = document.createElement('h3');
    name.textContent = goblin.name;
    name.classList.add('goblin-name');

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    const goblinImage = document.createElement('img');
    goblinImage.src = goblin.points ? '../assets/fighting-goblin.png' : '../assets/dead-goblin.png';
    goblinImage.classList.add('goblin-image');

    const points = document.createElement('span');
    points.textContent = goblin.points;
    points.classList.add('goblin-points');

    const fightButton = document.createElement('button');
    fightButton.textContent = 'Fight!';
    fightButton.classList.add('fight-button');

    fightButton.addEventListener('click', () => {
        if (healthPoints > 0) {
            handleFightGoblin(goblin);
        }
        else {
            handleGameOver();
        }
    });

    infoContainer.append(goblinImage, points, fightButton);


    div.append(name, infoContainer);

    return div;

}