/**
 * Shooting Stars Effect with Curved Trail
 * Creates trail that follows exact finger/mouse path - can curve and bend
 */

// Trail points storage
let trailPoints = [];
const MAX_TRAIL_POINTS = 30;

// Create trail canvas
let trailCanvas = null;
let ctx = null;

function initCanvas() {
    if (trailCanvas) return;

    trailCanvas = document.createElement('canvas');
    trailCanvas.id = 'trail-canvas';
    trailCanvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 99999;
  `;
    document.body.appendChild(trailCanvas);

    ctx = trailCanvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
    if (!trailCanvas) return;
    trailCanvas.width = window.innerWidth;
    trailCanvas.height = window.innerHeight;
}

// Add point to trail
function addTrailPoint(x, y) {
    trailPoints.push({
        x,
        y,
        alpha: 1,
        time: Date.now()
    });

    // Keep trail limited
    if (trailPoints.length > MAX_TRAIL_POINTS) {
        trailPoints.shift();
    }
}

// Draw the curved trail
function drawTrail() {
    if (!ctx || trailPoints.length < 2) return;

    ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);

    // Fade out old points
    const now = Date.now();
    trailPoints = trailPoints.filter(p => now - p.time < 500);

    if (trailPoints.length < 2) return;

    // Draw gradient trail
    for (let i = 1; i < trailPoints.length; i++) {
        const prev = trailPoints[i - 1];
        const curr = trailPoints[i];
        const progress = i / trailPoints.length;
        const alpha = progress * (1 - (now - curr.time) / 500);
        const width = progress * 6;

        // Main trail line
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);

        // Gradient color from blue to white
        const gradient = ctx.createLinearGradient(prev.x, prev.y, curr.x, curr.y);
        gradient.addColorStop(0, `rgba(100, 150, 255, ${alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${alpha})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(100, 150, 255, ${alpha})`;
    }

    // Draw head (bright dot at the end)
    if (trailPoints.length > 0) {
        const head = trailPoints[trailPoints.length - 1];
        const headAlpha = 1 - (now - head.time) / 500;

        if (headAlpha > 0) {
            ctx.beginPath();
            ctx.arc(head.x, head.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${headAlpha})`;
            ctx.shadowBlur = 20;
            ctx.shadowColor = `rgba(255, 255, 255, ${headAlpha})`;
            ctx.fill();
        }
    }

    ctx.shadowBlur = 0;
}

// Animation loop
let animationRunning = false;

function animate() {
    drawTrail();

    if (trailPoints.length > 0) {
        requestAnimationFrame(animate);
    } else {
        animationRunning = false;
    }
}

function startAnimation() {
    if (!animationRunning) {
        animationRunning = true;
        animate();
    }
}

// Sparkle effect
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

    function animateSparkle() {
        scale += 0.1;
        sparkleOpacity -= 0.05;

        if (sparkleOpacity > 0) {
            sparkle.style.transform = `scale(${scale})`;
            sparkle.style.opacity = sparkleOpacity;
            requestAnimationFrame(animateSparkle);
        } else {
            sparkle.remove();
        }
    }

    requestAnimationFrame(animateSparkle);
}

export function initShootingStars() {
    initCanvas();

    let isActive = false;
    let lastX = 0;
    let lastY = 0;

    // Touch start
    document.addEventListener('touchstart', (e) => {
        isActive = true;
        const touch = e.touches[0];
        lastX = touch.clientX;
        lastY = touch.clientY;

        trailPoints = [];
        addTrailPoint(touch.clientX, touch.clientY);
        startAnimation();

        // Create sparkles
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                createSparkle(
                    touch.clientX + (Math.random() - 0.5) * 40,
                    touch.clientY + (Math.random() - 0.5) * 40
                );
            }, i * 50);
        }
    }, { passive: true });

    // Touch move - add points to trail
    document.addEventListener('touchmove', (e) => {
        if (!isActive) return;

        const touch = e.touches[0];
        const dx = touch.clientX - lastX;
        const dy = touch.clientY - lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Add points frequently for smooth curve
        if (distance > 5) {
            addTrailPoint(touch.clientX, touch.clientY);
            startAnimation();

            // Occasional sparkle
            if (Math.random() > 0.7) {
                createSparkle(touch.clientX, touch.clientY);
            }

            lastX = touch.clientX;
            lastY = touch.clientY;
        }
    }, { passive: true });

    // Touch end
    document.addEventListener('touchend', () => {
        isActive = false;
        // Trail will fade out automatically
    }, { passive: true });

    // Mouse support for desktop
    document.addEventListener('mousedown', (e) => {
        isActive = true;
        lastX = e.clientX;
        lastY = e.clientY;

        trailPoints = [];
        addTrailPoint(e.clientX, e.clientY);
        startAnimation();
        createSparkle(e.clientX, e.clientY);
    });

    document.addEventListener('mousemove', (e) => {
        if (!isActive) return;

        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 5) {
            addTrailPoint(e.clientX, e.clientY);
            startAnimation();

            if (Math.random() > 0.8) {
                createSparkle(e.clientX, e.clientY);
            }

            lastX = e.clientX;
            lastY = e.clientY;
        }
    });

    document.addEventListener('mouseup', () => {
        isActive = false;
    });

    console.log('✨ Curved trail effect initialized - follows finger path!');
}
