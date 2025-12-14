/**
 * Shooting Stars Effect
 * Creates shooting star animation on touch/click
 */

export function createShootingStar(x, y) {
    const star = document.createElement('div');
    const angle = 30 + Math.random() * 20;

    star.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.8) 70%, white 100%);
    border-radius: 10px;
    pointer-events: none;
    z-index: 99999;
    transform-origin: right center;
    transform: rotate(${angle}deg);
    box-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(100,150,255,0.5);
  `;

    const head = document.createElement('div');
    head.style.cssText = `
    position: absolute;
    right: -3px;
    top: -3px;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 10px white, 0 0 20px rgba(100,150,255,0.8), 0 0 30px rgba(150,100,255,0.6);
  `;
    star.appendChild(head);

    document.body.appendChild(star);

    let opacity = 1;
    let translateX = 0;

    function animate() {
        opacity -= 0.03;
        translateX += 8;

        if (opacity > 0) {
            star.style.opacity = opacity;
            star.style.transform = `rotate(${angle}deg) translateX(${translateX}px)`;
            requestAnimationFrame(animate);
        } else {
            star.remove();
        }
    }

    requestAnimationFrame(animate);
}

export function createSparkle(x, y) {
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#fff'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
    position: fixed;
    left: ${x - 5}px;
    top: ${y - 5}px;
    width: 10px;
    height: 10px;
    background: ${color};
    border-radius: 50%;
    pointer-events: none;
    z-index: 99999;
    box-shadow: 0 0 10px ${color}, 0 0 20px ${color};
  `;

    document.body.appendChild(sparkle);

    let scale = 1;
    let sparkleOpacity = 1;

    function animate() {
        scale += 0.1;
        sparkleOpacity -= 0.05;

        if (sparkleOpacity > 0) {
            sparkle.style.transform = `scale(${scale})`;
            sparkle.style.opacity = sparkleOpacity;
            requestAnimationFrame(animate);
        } else {
            sparkle.remove();
        }
    }

    requestAnimationFrame(animate);
}

export function initShootingStars() {
    let lastTouchX = 0;
    let lastTouchY = 0;
    let touchActive = false;

    // Touch start
    document.addEventListener('touchstart', (e) => {
        touchActive = true;
        const touch = e.touches[0];
        lastTouchX = touch.clientX;
        lastTouchY = touch.clientY;

        createShootingStar(touch.clientX, touch.clientY);
        setTimeout(() => {
            createShootingStar(touch.clientX + 20, touch.clientY - 10);
        }, 100);

        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                createSparkle(
                    touch.clientX + (Math.random() - 0.5) * 40,
                    touch.clientY + (Math.random() - 0.5) * 40
                );
            }, i * 50);
        }
    }, { passive: true });

    // Touch move
    document.addEventListener('touchmove', (e) => {
        if (!touchActive) return;

        const touch = e.touches[0];
        const dx = touch.clientX - lastTouchX;
        const dy = touch.clientY - lastTouchY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 20) {
            createShootingStar(touch.clientX, touch.clientY);
            createSparkle(touch.clientX, touch.clientY);
            lastTouchX = touch.clientX;
            lastTouchY = touch.clientY;
        }
    }, { passive: true });

    // Touch end
    document.addEventListener('touchend', () => {
        if (touchActive) {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    createShootingStar(
                        lastTouchX + (Math.random() - 0.5) * 60,
                        lastTouchY + (Math.random() - 0.5) * 60
                    );
                }, i * 80);
            }
        }
        touchActive = false;
    }, { passive: true });

    // Mouse click (desktop)
    document.addEventListener('click', (e) => {
        createShootingStar(e.clientX, e.clientY);
        createSparkle(e.clientX, e.clientY);
    });

    console.log('✨ Shooting stars initialized');
}
