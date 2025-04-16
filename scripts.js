// Starfield Canvas
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 200;

class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.z = Math.random() * canvas.width;
    this.speed = 2;
  }

  update() {
    this.z -= this.speed;
    if (this.z <= 0) {
      this.z = canvas.width;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }
  }

  draw() {
    const x = (this.x - canvas.width / 2) * (canvas.width / this.z) + canvas.width / 2;
    const y = (this.y - canvas.height / 2) * (canvas.width / this.z) + canvas.height / 2;
    const size = canvas.width / this.z;

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}

for (let i = 0; i < numStars; i++) {
  stars.push(new Star());
}

function animateStarfield() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  requestAnimationFrame(animateStarfield);
}

animateStarfield();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});