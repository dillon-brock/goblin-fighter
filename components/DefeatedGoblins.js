export default function createDefeatedGoblins(root) {
    return ({ goblins }) => {

        let numDefeated = 0;
        for (const goblin of goblins) {
            if (goblin.defeated) numDefeated++;
        }
        root.textContent = `You have defeated ${numDefeated} goblins`;
    };
}