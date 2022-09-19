const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

// Set up the application's drawing style
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 3;
ctx.strokeStyle = '#a2f100';

// Set up the application's variables
let isDrawing = false;
let preX = 0;
let preY = 0;

// Set up the draw function
function draw(e){
    if(!isDrawing){return};
    ctx.beginPath();
    ctx.moveTo(preX, preY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [preX, preY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', draw)

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [preX, preY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener('mouseup', () => (isDrawing = false));

canvas.addEventListener('mouseout', () => (isDrawing = false));

// Set up an option for clearing the canvas
document.addEventListener('keydown', (e) => {
    if(e.key == 'Backspace'){
        ctx.clearRect(0, 0, 700, 400);
    }
})


