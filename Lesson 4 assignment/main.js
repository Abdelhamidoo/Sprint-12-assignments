"use strict";

const canvas = document.querySelector('#canvas');
const gGl = canvas.getContext("webgl");

function loadVertexAndFragmentShader(vertexID, fragmentID, gGl){
   let vertexShaderText, fragmentShaderText, vertexShaderSource, fragmentShaderSource;
   let vertexCompiledShader, fragmentCompiledShader; 
   vertexShaderText = document.getElementById(vertexID);
   fragmentShaderText = document.getElementById(fragmentID);
   vertexShaderSource = vertexShaderText.innerHTML;
   fragmentShaderSource = fragmentShaderText.innerHTML;
   vertexCompiledShader = gGl.createShader(gGl.VERTEX_SHADER);
   fragmentCompiledShader = gGl.createShader(gGl.FRAGMENT_SHADER);
   gGl.shaderSource(vertexCompiledShader, vertexShaderSource);
   gGl.shaderSource(fragmentCompiledShader, fragmentShaderSource);
   gGl.compileShader(vertexCompiledShader);
   gGl.compileShader(fragmentCompiledShader);
   const shaderProgram = gGl.createProgram();
   gGl.attachShader(shaderProgram, vertexCompiledShader);
   gGl.attachShader(shaderProgram, fragmentCompiledShader);
   gGl.linkProgram(shaderProgram);

  return shaderProgram;
};

const shaderProgram = loadVertexAndFragmentShader(
    'vertexShader',
    'fragmentShader',
    gGl);
gGl.useProgram(shaderProgram);

const vertexPositionAttribute = gGl.getAttribLocation(shaderProgram, 'a_position');

const n = 100;
const rad = 0.5;
const array = [];
    
const steps = 360 / n;
for (let i = 0.0; i <= 360 + steps; i += steps) {
    const j = i * (Math.PI / 180);
      array.push(Math.sin(j) * rad);
      array.push(Math.cos(j) * rad);
};

const buffer = gGl.createBuffer();
gGl.bindBuffer(gGl.ARRAY_BUFFER, buffer);
gGl.bufferData(gGl.ARRAY_BUFFER, new Float32Array(array), gGl.STATIC_DRAW);

// Enable vertex shader attribute for writing
gGl.enableVertexAttribArray(vertexPositionAttribute);
// Write day to the vertex shader attribute from the buffer that we just created
gGl.vertexAttribPointer(vertexPositionAttribute, 2, gGl.FLOAT, false, 0, 0);

gGl.clearColor(0.1375, 0.152, 0.164, 1.0);
// Clear scene with color set in gGl.clearColor
gGl.clear(gGl.COLOR_BUFFER_BIT);
// Draw
gGl.drawArrays(gGl.LINE_STRIP, 0, array.length / 2);
