document.addEventListener('DOMContentLoaded', function() {
    
    const splashScreen = document.getElementById('splash-screen');
    const progressFill = document.getElementById('progressFill');
    const loadingText = document.getElementById('loadingText');
    const mainContent = document.getElementById('main-content');

    let progress = 0;
    const totalTime = 4000;
    const intervalTime = 50;
    const steps = totalTime / intervalTime;
    let currentStep = 0;

    function updateProgress() {
        currentStep++;
        progress = (currentStep / steps) * 100;

        if (progress > 100) progress = 100;

        progressFill.style.width = progress + '%';
        loadingText.textContent = `Загрузка... ${Math.round(progress)}%`;

        if (progress >= 100) {
            clearInterval(timer);
            finishLoading();
        }
    }

    function finishLoading() {
        splashScreen.classList.add('hidden');

        setTimeout(() => {
            mainContent.classList.add('visible');
        }, 300);
    }

    const timer = setInterval(updateProgress, intervalTime);

    const cube = document.querySelector('.cube');
    if (cube) {
        cube.addEventListener('mouseenter', function() {
            this.style.animationDuration = '3s';
        });
        cube.addEventListener('mouseleave', function() {
            this.style.animationDuration = '8s';
        });
    }

    const startBtn = document.querySelector('.btn-primary');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            alert('🎲 Добро пожаловать в мир приключений!');
        });
    }

    console.log('⚔️ Dice & Cubes загружен! Приятной игры!');
});