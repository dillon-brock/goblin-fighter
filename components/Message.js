export default function createMessage(root) {
    return ({ message }) => {
        root.innerHTML = message;
    };
}