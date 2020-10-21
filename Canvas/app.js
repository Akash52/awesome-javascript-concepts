const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Fill react
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = "blue";
ctx.fillRect(200, 20, 150, 100);
ctx.fillStyle = "green";
ctx.fillRect(400, 20, 150, 100);
//StrokeReact()

ctx.linewidth = 5;
ctx.strokestyle = "green";
ctx.strokeRect(100, 200, 150, 100);

//ClearRect()
ctx.clearRect(25, 25, 140, 90);
