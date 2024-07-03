import { useRef, useEffect } from 'react';

const Cursor = () => {
    const canvasRef = useRef(null);
    const pointer = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const trail = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const params = {
            pointsNumber: 40,
            widthFactor: 0.3,
            mouseThreshold: 0.6,
            spring: 0.4,
            friction: 0.5,
            lineWidth: 3 // Nuevo parámetro para el grosor de la línea
        };

        for (let i = 0; i < params.pointsNumber; i++) {
            trail.current.push({ x: pointer.current.x, y: pointer.current.y, dx: 0, dy: 0 });
        }

        const updateMousePosition = (eX, eY) => {
            pointer.current.x = eX;
            pointer.current.y = eY;
        };

        const handleMouseMove = (e) => {
            updateMousePosition(e.clientX, e.clientY);
        };

        const handleTouchMove = (e) => {
            updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#bdfa00';
            ctx.lineWidth = params.lineWidth; // Usar el grosor de línea definido

            trail.current.forEach((p, pIdx) => {
                const prev = pIdx === 0 ? pointer.current : trail.current[pIdx - 1];
                const spring = pIdx === 0 ? 0.3 * params.spring : params.spring;
                p.dx += (prev.x - p.x) * spring;
                p.dy += (prev.y - p.y) * spring;
                p.dx *= params.friction;
                p.dy *= params.friction;
                p.x += p.dx;
                p.y += p.dy;
            });

            ctx.beginPath();
            ctx.moveTo(trail.current[0].x, trail.current[0].y);

            for (let i = 1; i < trail.current.length - 1; i++) {
                const xc = (trail.current[i].x + trail.current[i + 1].x) / 2;
                const yc = (trail.current[i].y + trail.current[i + 1].y) / 2;
                ctx.quadraticCurveTo(trail.current[i].x, trail.current[i].y, xc, yc);
            }

            ctx.stroke();
            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return <canvas id="canvasId" ref={canvasRef} className="fixed inset-0 top-0 left-0 w-full h-screen pointer-events-none z-[9999] " />

};

export default Cursor;
