const canvas = document.getElementById('spiderCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const opts = {
    spiderOffsetX: 50,
    spiderOffsetY: 50,
    bodyHeight: 40,
    jump: 20,
    shadow: 10
};

const mouse = {
    x: canvas.width / 3,
    y: canvas.height / 3,
    lerpX: (target, amount) => mouse.x + (target - mouse.x) * amount,
    lerpY: (target, amount) => mouse.y + (target - mouse.y) * amount
};

// Array de patas (Paws) que você pode ajustar conforme o design da aranha
let Paws = [
    { p: { x: 100, y: 100 } },
    { p: { x: 150, y: 150 } },
    { p: { x: 200, y: 200 } },
    { p: { x: 250, y: 250 } }
    // Adicione mais patas conforme necessário
];

// Função que desenha a aranha
const drawSpider = () => {
    const x = mouse.lerpX(mouse.x, 0.1) + opts.spiderOffsetX;
    const y = mouse.lerpY(mouse.y, 0.1) + opts.spiderOffsetY;

    Paws.forEach((p, i) => {
        ctx.strokeStyle = "#eee";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y + opts.bodyHeight);  // Movimento do corpo
        const x2 = mouse.lerpX(p.p.x, 0.1);  // Movimento suavizado da perna
        const y2 = mouse.lerpY(p.p.y, 0.1);  // Movimento suavizado da perna
        ctx.quadraticCurveTo(x2, y2, p.p.x, p.p.y);
        ctx.stroke();
        ctx.closePath();
    });
};

// Função que atualiza o canvas e redesenha a aranha
const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    drawSpider();  // Desenha a aranha com base no movimento do mouse
    requestAnimationFrame(update);
};

// Captura o movimento do mouse e atualiza a posição do mouse
canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Inicia a animação
update();
