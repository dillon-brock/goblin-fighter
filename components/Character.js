export default function createCharacter(root) {
    return ({ healthPoints }) => {
        const p = root.querySelector('p');
        const img = root.querySelector('img');
        p.textContent = healthPoints > 0 ? `Your HP: ${healthPoints}` : 'Game Over!';
        img.src = healthPoints > 0 ? '../assets/goblin-fighter-avatar.png' : '../assets/skeleton.png';
    };
}