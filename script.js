const urls = {
    attendance: "http://115.241.194.20/sis/Examination/Reports/StudentSearchHTMLReport_student.aspx?R=MjAyMzA5MBI2NTZ4&T=-8584723613578166740",
    exam: "https://narayanagroup.co.in/patient/EngAutonomousReport.aspx/MjAyMjA5MDI2MDgx"
};

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

function generateURL(type) {
    let inputText = document.getElementById("inputText").value.trim();
    if (!inputText) {
        alert("Please enter your Registration Number!");
        return;
    }
    let encodedText = btoa(inputText);
    let newURL = urls[type].replace(/MjAyMzA5MBI2NTZ4|MjAyMjA5MDI2MDgx/g, encodedText);
    let newTab = window.open(newURL, "_blank");
    setTimeout(() => { downloadPage(newTab, newURL); }, 3000);
}

function downloadPage(tab, url) {
    let a = document.createElement("a");
    a.href = url;
    a.download = "result.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.getElementById("downloadBtn").addEventListener("click", () => {
    let inputText = document.getElementById("inputText").value.trim();
    if (!inputText) {
        alert("Please enter your Registration Number!");
        return;
    }
    let encodedText = btoa(inputText);
    let url = urls.exam.replace(/MjAyMzA5MBI2NTZ4|MjAyMjA5MDI2MDgx/g, encodedText);
    downloadPage(null, url);
});
