/**
 * Shooting Stars Effect
 * Creates shooting star animation on touch/click that follows movement direction
 */

// Create shooting star with custom angle based on movement direction
export function createShootingStar(x, y, dx = 1, dy = -1) {
    const star = document.createElement('div');

    // Calculate angle from movement direction (dx, dy)
    // atan2 gives angle in radians, convert to degrees
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);

    // Add small random variation for natural look
    angle += (Math.random() - 0.5) * 10;

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

    // Touch start - random direction since no movement yet
    document.addEventListener('touchstart', (e) => {
        touchActive = true;
        const touch = e.touches[0];
        lastTouchX = touch.clientX;
        lastTouchY = touch.clientY;

        // Initial shooting stars with random diagonal direction
        createShootingStar(touch.clientX, touch.clientY, 1, -0.5);
        setTimeout(() => {
            createShootingStar(touch.clientX + 20, touch.clientY - 10, 1.2, -0.7);
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

    // Touch move - shooting star follows finger direction
    document.addEventListener('touchmove', (e) => {
        if (!touchActive) return;

        const touch = e.touches[0];
        const dx = touch.clientX - lastTouchX;
        const dy = touch.clientY - lastTouchY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 15) {
            // Create shooting star that follows the movement direction
            createShootingStar(touch.clientX, touch.clientY, dx, dy);
            createSparkle(touch.clientX, touch.clientY);

            lastTouchX = touch.clientX;
            lastTouchY = touch.clientY;
        }
    }, { passive: true });

    // Touch end - burst in last movement direction
    document.addEventListener('touchend', () => {
        if (touchActive) {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    // Random burst directions
                    const randomDx = (Math.random() - 0.5) * 2;
                    const randomDy = (Math.random() - 0.5) * 2;
                    createShootingStar(
                        lastTouchX + (Math.random() - 0.5) * 60,
                        lastTouchY + (Math.random() - 0.5) * 60,
                        randomDx,
                        randomDy
                    );
                }, i * 80);
            }
        }
        touchActive = false;
    }, { passive: true });

    // Mouse move for desktop - track movement direction
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseDown = false;

    document.addEventListener('mousedown', (e) => {
        mouseDown = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        createShootingStar(e.clientX, e.clientY, 1, -0.5);
        createSparkle(e.clientX, e.clientY);
    });

    document.addEventListener('mousemove', (e) => {
        if (!mouseDown) return;

        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 15) {
            createShootingStar(e.clientX, e.clientY, dx, dy);
            createSparkle(e.clientX, e.clientY);
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
        }
    });

    document.addEventListener('mouseup', () => {
        mouseDown = false;
    });

    // Simple click also creates star
    document.addEventListener('click', (e) => {
        if (!mouseDown) {
            createShootingStar(e.clientX, e.clientY, 1, -0.5);
            createSparkle(e.clientX, e.clientY);
        }
    });

    console.log('✨ Shooting stars initialized - follows movement direction!');
}
