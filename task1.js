const canvas = document.getElementById('dic-canvas');
const ctx = canvas.getContext('2d');
const rollno = (event) => {
    if (event.key == ' ') {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height); 
        ctx.rect(150, 100, 100, 70);
        ctx.strokeStyle = "black";
        ctx.stroke();

        let num = Math.floor(Math.random() * 6) + 1; 
        ctx.font = "50px Arial"; 
        ctx.fillStyle = "black"; 
        let textX = 185; 
        let textY = 153; 
        ctx.fillText(num, textX, textY); 
    }
}

document.addEventListener("keydown", rollno);
