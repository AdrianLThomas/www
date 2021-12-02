if(CSS.paintWorklet) {
    CSS.paintWorklet.addModule('tilePattern.js');
}

const fullWindowWidth = (backgroundColor = "#1a202c") => `
    width: 100%;
    background-color: ${backgroundColor};
    background-image: paint(tilePattern);
`

export { fullWindowWidth }
