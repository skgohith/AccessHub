// URLs for attendance and exam
const urls = {
    attendance: "http://115.241.194.20/sis/Examination/Reports/StudentSearchHTMLReport_student.aspx?R=MjAyMzA5MBI2NTZ4&T=-8584723613578166740",
    exam: "https://narayanagroup.co.in/patient/EngAutonomousReport.aspx/MjAyMjA5MDI2MDgx"
};

// Validate Password
function validatePassword() {
    const password = document.getElementById("passwordInput").value;
    if (password === "gono") {
        document.getElementById("passwordScreen").style.display = "none";
        const mainContent = document.getElementById("mainContent");
        mainContent.style.display = "block";
        setTimeout(() => { mainContent.style.opacity = 1; }, 100);
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
}

// Generate URLs dynamically
function generateURL(type) {
    let inputText = document.getElementById("inputText").value.trim();
    if (!inputText) {
        alert("Please enter your Registration Number!");
        return;
    }
    let encodedText = btoa(inputText);
    let newURL = urls[type].replace(/MjAyMzA5MBI2NTZ4|MjAyMjA5MDI2MDgx/g, encodedText);
    setTimeout(() => { window.open(newURL, "_blank"); }, 2000);
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    this.textContent = document.body.classList.contains("light-mode") ? "Toggle Dark Mode" : "Toggle Light Mode";
});

// 3D Grid Background Animation
const canvas = document.getElementById("gridCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gridSize = 50;
const depthFactor = 2; 

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
            let dx = mouseX - x;
            let dy = mouseY - y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            let glow = Math.max(0, 255 - distance / 2);
            let depth = Math.sin(distance / 100) * depthFactor;

            ctx.fillStyle = `rgba(${glow}, ${255 - glow}, ${glow}, 0.8)`;
            ctx.strokeStyle = `rgba(0, 255, 0, ${1 - depth / 5})`;
            ctx.lineWidth = 2;

            let sizeOffset = depth * 5;
            ctx.fillRect(x + sizeOffset, y + sizeOffset, gridSize - 10, gridSize - 10);
            ctx.strokeRect(x + sizeOffset, y + sizeOffset, gridSize - 10, gridSize - 10);
        }
    }
    requestAnimationFrame(drawGrid);
}

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

drawGrid();