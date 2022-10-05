const palette = ['red', 'blue', 'yellow', 'white'];
const [dimX, dimY]  = [10, 10];
const [gridX, gridY] = [100/dimX, 100/dimY];
const strokeWidth = .5;
const strokeColor = 'white';
const pixelArt = document.querySelector('.pixelArt');
for (let x=0; x < dimX; x += 1) {
    for (let y=0; y < dimY; y += 1){
        const fillColor = palette[Math.floor(Math.random() * palette.length)];
        const template = `<rect x="${x*gridX}%" y="${y*gridY}%" width="${gridX}%" height="${gridY}%" style="fill:${fillColor};stroke:${strokeColor};stroke-width:${strokeWidth}%; fill-opacity:1;stroke-opacity:1" />`;
        pixelArt.insertAdjacentHTML('afterbegin', template);
    };
};