"use client";

import { useEffect, useRef } from "react";

export default function Constellation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let particles = [];

    const mouse = {
      x: null,
      y: null,
      radius: 160,
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const createParticles = () => {
      particles = [];

      const area = window.innerWidth * window.innerHeight;

      let particleCount = Math.floor(area / 12000);

      particleCount = Math.max(45, particleCount);
      particleCount = Math.min(120, particleCount);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,

          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,

          size: Math.random() * 1.6 + 0.5,

          opacity: Math.random() * 0.6 + 0.25,

          hue: Math.random() * 100,
        });
      }
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const draw = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      /* =========================
         MOVE PARTICLES
      ========================= */

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        /* Wrap around screen */

        if (particle.x < -20) {
          particle.x = window.innerWidth + 20;
        }

        if (particle.x > window.innerWidth + 20) {
          particle.x = -20;
        }

        if (particle.y < -20) {
          particle.y = window.innerHeight + 20;
        }

        if (particle.y > window.innerHeight + 20) {
          particle.y = -20;
        }

        /* =========================
           MOUSE INTERACTION
        ========================= */

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < mouse.radius) {
            const force =
              (mouse.radius - distance) /
              mouse.radius;

            particle.x -=
              (dx / distance) * force * 0.7;

            particle.y -=
              (dy / distance) * force * 0.7;
          }
        }
      });

      /* =========================
         DRAW CONNECTIONS
      ========================= */

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          const connectionDistance = 130;

          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) *
              0.22;

            const gradient = ctx.createLinearGradient(
              p1.x,
              p1.y,
              p2.x,
              p2.y
            );

            gradient.addColorStop(
              0,
              `rgba(139, 92, 246, ${opacity})`
            );

            gradient.addColorStop(
              0.5,
              `rgba(59, 130, 246, ${opacity})`
            );

            gradient.addColorStop(
              1,
              `rgba(236, 72, 153, ${opacity})`
            );

            ctx.beginPath();

            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.7;

            ctx.stroke();
          }
        }
      }

      /* =========================
         DRAW PARTICLES
      ========================= */

      particles.forEach((particle) => {
        let color;

        if (particle.hue < 33) {
          color = "139, 92, 246";
        } else if (particle.hue < 66) {
          color = "59, 130, 246";
        } else {
          color = "236, 72, 153";
        }

        /* Glow */

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size * 4,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(${color}, ${
          particle.opacity * 0.08
        })`;

        ctx.fill();

        /* Core */

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(${color}, ${particle.opacity})`;

        ctx.fill();
      });

      /* =========================
         MOUSE GLOW
      ========================= */

      if (mouse.x !== null && mouse.y !== null) {
        const mouseGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          180
        );

        mouseGradient.addColorStop(
          0,
          "rgba(139, 92, 246, 0.08)"
        );

        mouseGradient.addColorStop(
          0.5,
          "rgba(59, 130, 246, 0.04)"
        );

        mouseGradient.addColorStop(
          1,
          "rgba(236, 72, 153, 0)"
        );

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          180,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = mouseGradient;

        ctx.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    resizeCanvas();
    draw();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <canvas
  ref={canvasRef}
  className="pointer-events-none fixed inset-0 z-0 h-full w-full"
/>
  );
}