const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 3;
ctx.strokeStyle = '#a2f100';