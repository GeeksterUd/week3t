const canvas = document.getElementById("board");
const deleteb = document.getElementById("dlt");
const undo = document.getElementById("un");
const context = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", startdraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopdrawing);
canvas.addEventListener("mouseout", stopdrawing);

function startdraw(e) {
    drawing=true;
    context.beginPath()
    context.moveTo(e.clientX-canvas.offsetLeft,e.clientY - canvas.offsetTop )
    e.preventDefault();
}

function draw(e) {
    if (!drawing) return;
    context.lineWidth = 2;
    context.lineCap = "round";
    context.lineTo(e.clientX-canvas.offsetLeft,e.clientY - canvas.offsetTop )
    context.stroke()
    e.preventDefault()
}

function stopdrawing() {
    if(drawing)
    {
        context.stroke();
        context.closePath();
        drawing=false;
    }
    e.preventDefault();
}

function deleteall() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function undolast() {
    context.clearRect(10, 20,500,500);
}
