export default function createAddGoblin(form, { handleAddGoblin }) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const defaultName = `Goblin #${Math.ceil(Math.random() * 999)}`;
        const formData = new FormData(form);
        formData.get('name') ? handleAddGoblin(formData.get('name')) : handleAddGoblin(defaultName);
        form.reset();
    });
    return () => {
    
    };
}