document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'ArrowLeft') {
        // do not alert when only Control key is pressed.
        return "left";
    } else if (keyName === "ArrowRight") {
        return "right";
    } else {
        console.log(`Key pressed ${keyName}`);
    }
}, false);

document.addEventListener('keyup', (event) => {
    const keyName = event.key;

    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === 'ArrowLeft') {
        return null;
    } else if (keyName === "ArrowRight") {
        return "null";
    } else {
        console.log(`Key up ${keyName}`);
    }
}, false);