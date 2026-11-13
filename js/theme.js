// js/theme.js
document.addEventListener("DOMContentLoaded", () => {
    // Leer el nivel máximo alcanzado (por defecto 0)
    const unlockedLevel = parseInt(localStorage.getItem('snakeRewardLevel') || '0', 10);
    
    if (unlockedLevel === 1) {
        document.body.classList.add('reward-level-1');
    } else if (unlockedLevel === 2) {
        document.body.classList.add('reward-level-2');
    } else if (unlockedLevel >= 3) {
        document.body.classList.add('reward-level-3');
    }
});