import React, { useEffect, useRef } from 'react';


const BlueprintCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const R = Math.min(canvas.width, canvas.height) * 0.32;

      // Very slow pulsing opacity
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.008);
      const baseAlpha = 0.06 + pulse * 0.04;

      ctx.save();
      ctx.translate(cx, cy);

      // ─ Outer circle
      ctx.beginPath();
      ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${baseAlpha})`;
      ctx.lineWidth = 0.5;
      ctx.setLineDash([]);
      ctx.stroke();

      // ─ Inner circle
      ctx.beginPath();
      ctx.arc(0, 0, R * 0.55, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${baseAlpha * 0.8})`;
      ctx.lineWidth = 0.5;
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      // ─ Triangle "A" (apex up)
      const topY = -R * 0.85;
      const baseY = R * 0.5;
      const baseW = R * 0.75;

      ctx.beginPath();
      ctx.moveTo(0, topY);
      ctx.lineTo(-baseW, baseY);
      ctx.lineTo(baseW, baseY);
      ctx.closePath();
      ctx.strokeStyle = `rgba(255,255,255,${0.12 + pulse * 0.06})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // ─ Inner triangle (smaller)
      const iScale = 0.55;
      ctx.beginPath();
      ctx.moveTo(0, topY * iScale);
      ctx.lineTo(-baseW * iScale, baseY * iScale);
      ctx.lineTo(baseW * iScale, baseY * iScale);
      ctx.closePath();
      ctx.strokeStyle = `rgba(255,255,255,${baseAlpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // ─ Cross-bar of "A"
      const crossY = baseY * 0.2;
      const crossX = baseW * 0.35;
      ctx.beginPath();
      ctx.moveTo(-crossX, crossY);
      ctx.lineTo(crossX, crossY);
      ctx.strokeStyle = `rgba(255,255,255,${baseAlpha * 1.5})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // ─ Guide lines (radial)
      const guideAngles = [0, 60, 120, 180, 240, 300];
      guideAngles.forEach(deg => {
        const rad = (deg * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(rad) * R * 1.2, Math.sin(rad) * R * 1.2);
        ctx.strokeStyle = `rgba(255,255,255,${baseAlpha * 0.4})`;
        ctx.lineWidth = 0.3;
        ctx.stroke();
      });

      // ─ Horizontal guide lines
      [-R * 0.5, 0, R * 0.5, R * 0.85, -R * 0.85].forEach(y => {
        ctx.beginPath();
        ctx.moveTo(-canvas.width, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `rgba(255,255,255,${baseAlpha * 0.3})`;
        ctx.lineWidth = 0.3;
        ctx.stroke();
      });

      ctx.restore();
      t += 1;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 1 }}
    />
  );
};

export default BlueprintCanvas;
