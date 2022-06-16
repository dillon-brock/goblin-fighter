export default function createGoblins(root) {

    return ({ goblins }) => {
        for (const goblin of goblins) {
            root.append(Goblin(goblin));
        }
    };

}

export function Goblin(goblin) {

    const div = document.createElement('div');
    div.classList.add('goblin');

    const name = document.createElement('h3');
    name.textContent = goblin.name;
    name.classList.add('goblin-name');

    const goblinImage = document.createElement('img');
    goblinImage.src = goblin.points ? '../assets/fighting-goblin.png' : '../assets/dead-goblin.png';
    goblinImage.classList.add('goblin-image');

    const points = document.createElement('span');
    points.textContent = goblin.points;
    points.classList.add('goblin-points');

    div.append(name, goblinImage, points);

    return div;

}