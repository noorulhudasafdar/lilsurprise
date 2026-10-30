
// Open birthday surprise
function openSurprise() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("birthday").classList.remove("hidden");
    window.scrollTo(0, 0);
}

// Blow birthday candles
function blowCandles() {
    document.getElementById("flame").classList.add("off");

    document.getElementById("wishMessage").classList.remove("hidden");

    document.getElementById("blowButton").classList.add("hidden");

    document.getElementById("letterButton").classList.remove("hidden");

    createConfetti();
}

// Show love letter
function showLetter() {
    document.getElementById("birthday").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
    window.scrollTo(0, 0);
}

// Show memories
function showMemories() {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("memories").classList.remove("hidden");
    window.scrollTo(0, 0);
}

// Final surprise
function showFinal() {
    document.getElementById("memories").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
    createConfetti();
    window.scrollTo(0, 0);
}

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 700);

// Confetti effect
function createConfetti() {
    for (let i = 0; i < 70; i++) {
        const confetti = document.createElement("div");

        confetti.innerHTML = ["❤️", "💗", "✨", "🎉", "💕"][
            Math.floor(Math.random() * 5)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "22px";
        confetti.style.zIndex = "100";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 3000;

        confetti.animate([
            { transform: "translateY(0) rotate(0deg)", opacity: 1 },
            { transform: `translateY(110vh) rotate(720deg)`, opacity: 0 }
        ], {
            duration: duration,
            easing: "ease-in"
        });

        setTimeout(() => confetti.remove(), duration);
    }
}

// Celebrate again
function celebrate() {
    createConfetti();
}
