document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("response").innerText = "Yay! ❤️ Can't wait!";
    createHearts();
});

let noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth * 0.8;
    let y = Math.random() * window.innerHeight * 0.8;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

function createHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 2 + "s";
        document.body.appendChild(heart);
        
        setTimeout(() => { heart.remove(); }, 2000);
    }
}