const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

// Save the canvas
ctx.save();

let frectx = 0;
let srectx = 10;
let trectx = 15;
let forectx = 32.5;
let firectx = 7.5;   
let sirectx = 47.5;   

function animation(){
ctx.clearRect(0, 0, canvas.width, canvas.height)
if(frectx === 600){
    frectx = 0;
    srectx = 10;
    trectx = 15;
    forectx = 32.5;
    firectx = 12.5;
    sirectx = 52.5;
}else{
    frectx++;
    srectx++;
    trectx++;
    forectx++;
    firectx++;
    sirectx++;
}

// Draw the road 
ctx.fillStyle = "#000000";
ctx.lineWidth = 2.5;
ctx.moveTo(0, 300);
ctx.lineTo(600, 300);

// Draw the trunk and the hood
ctx.fillRect(frectx, 270, 70, 25);

// Draw the body
ctx.fillRect(srectx, 255, 40, 15);

// Draw the windows
ctx.fillStyle = "#ffffff";
ctx.fillRect(trectx, 260, 12.5, 10);
ctx.fillRect(forectx, 260, 12.5, 10);

// Draw the wheels
ctx.fillStyle = "#000000";
ctx.fillRect(firectx, 295, 10, 5);
ctx.fillRect(sirectx, 295, 10, 5);
ctx.stroke();
requestAnimationFrame(animation);
}

animation()

// Restore the canvas
ctx.restore()

