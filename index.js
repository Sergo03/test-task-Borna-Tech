const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const x = canvas.width / 2
const y = canvas.height / 2;
const dx = 2;
const dy = -2;

const circleRowCount = 6;
const circleColumnCount = 6;
const circleRadius = 25;
const circlePadding = 30;
const circleOffsetTop = 100;
const circleOffsetLeft = 150;



const circles = [];
for (let c = 0; c < circleColumnCount; c++) {
    circles[c] = [];
    for(let r=0; r<circleRowCount; r++) {
        circles[c][r] = { x: 0, y: 0 };
    }
}

function drawCircles() {
    for (let c = 0; c < circleColumnCount; c++){
       for (let r = 0; r<circleRowCount; r++){
           const circleX = (c * (circleRadius + circlePadding)) + circleOffsetLeft;
           const circleY = (r * (circleRadius + circlePadding)) + circleOffsetTop;
           circles[c][r].x = circleX;
           circles[c][r].y = circleY;
           ctx.beginPath();
           ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2)
           ctx.fillStyle = "#0095DD";
           ctx.fill();
           ctx.closePath();
           canvas.onclick = function (e) {
            const clickX = e.offsetX
            const clickY = e.offsetY
               
               circles.forEach(item => {
                   item.forEach(i => {
                     
                       if (clickX  === i.x) {
                           console.log(i.x);
                       }
                   })
               })
           }
          

       }
}
}

function draw() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircles()
}
canvas.onmousedown = function (e) {
    canvas.onmousemove = function (e) {
       const x = e.offsetX
        const y = e.offsetY
        ctx.fillStyle='black'
        ctx.fillRect(x-5,y-5,5,5)
    }
    canvas.onmouseup = function () {
        canvas.onmousemove=null
    }
}

// canvas.onclick = function (e) {
//     // const x = e.offsetX
//     // const y = e.offsetY
 
//     circles.forEach(item => {
//         console.log(item);
//     })
// }
draw()
// setInterval(draw,10)
