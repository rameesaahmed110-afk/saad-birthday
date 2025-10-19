// Countdown Timer
function updateCountdown() {
    const birthday = new Date('2024-12-25'); // Replace with Saad's actual birthday (YYYY-MM-DD)
    const now = new Date();
    const diff = birthday - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('timer').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('timer').innerText = "It's your birthday! 🎉";
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Play Music
function playMusic() {
    const audio = document.getElementById('birthdayMusic');
    audio.play();
}

// Confetti
function showConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Wish Form
document.getElementById('wishForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const wishList = document.getElementById('wishList');
    
    const li = document.createElement('li');
    li.innerHTML = `<strong>${name}:</strong> ${message}`;
    wishList.appendChild(li);
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});
