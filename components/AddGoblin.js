export default function createAddGoblin(form, { handleAddGoblin }) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleAddGoblin(formData.get('name'));
        form.reset();
    });
    return () => {
    
    };
}