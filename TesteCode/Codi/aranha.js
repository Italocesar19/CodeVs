const drawSpider = () => {
    const x = mouse.lerpX - opst.spiderOffsetX;
    const y = mouse.lerpY - opst.spiderOffsetY;

    Paws.forEach((p, i) => {
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y + opts.bodyHeight);
        const x2 = lerp(x, p.x, 0.5);
        const y2 = lerp(y, opts.jump, p.y, opts.shadowY);
        ctx.quadraticCurveTo(x2, y2, p.x, p.y);
        ctx.stroke();
        ctx.closePath();         
    });
 }