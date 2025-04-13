import { useEffect, useRef } from "react";

const MouseTrail = () => {
  const canvasRef = useRef(null);
  const imageLoaded = useRef(false);
  const trailImage = new Image();
  trailImage.src = "https://img.icons8.com/color/48/000000/star--v1.png";
  trailImage.onload = () => {
    imageLoaded.current = true;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const trailLength = 30;
    let trail = [];

    const handleMouseMove = (event) => {
      const x = event.clientX - 15;
      const y = event.clientY - 15;
      trail.push({ x, y, alpha: 1 });
    };

    const fadeTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < trail.length; i++) {
        let t = trail[i];
        let alpha = t.alpha * (1 - i / trailLength);
        ctx.globalAlpha = alpha;
        ctx.drawImage(trailImage, t.x, t.y, 30, 30);
        t.alpha -= 0.05;
        if (t.alpha <= 0) {
          trail.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(fadeTrail);
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(fadeTrail);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 pointer-events-none" />;
};

export default MouseTrail;