import React, { useRef, useEffect, useState } from "react";
import "./Game.css";

export default function Game(props) {
  const canvasRef = useRef(null);
  const birdRef = useRef(null);
  const requestRef = useRef(null);

  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 320;
    canvas.height = 480;

    let frames = 0;
    let pipes = [];

    const pipeWidth = 50;
    const pipeGap = 120;
    const pipeFrequency = 90;

    birdRef.current = {
      x: 50,
      y: 150,
      width: 34,
      height: 24,
      gravity: 0.6,
      lift: -10,
      velocity: 0,

      draw() {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      },

      update() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y + this.height > canvas.height) {
          this.y = canvas.height - this.height;
          this.velocity = 0;
          endGame();
        }
        if (this.y < 0) {
          this.y = 0;
          this.velocity = 0;
        }
      },

      flap() {
        this.velocity = this.lift;
      },
    };

    const addPipe = () => {
      const top = Math.random() * (canvas.height / 2);
      pipes.push({
        x: canvas.width,
        top,
        bottom: top + pipeGap,
      });
    };

    const drawPipes = () => {
      ctx.fillStyle = "green";
      pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
        ctx.fillRect(pipe.x, pipe.bottom, pipeWidth, canvas.height - pipe.bottom);
      });
    };

    const updatePipes = () => {
      pipes.forEach(pipe => {
        pipe.x -= 2;
      });

      pipes = pipes.filter(pipe => pipe.x + pipeWidth > 0);

      if (frames % pipeFrequency === 0) {
        addPipe();
      }
    };

    const checkCollision = () => {
      const bird = birdRef.current;
      for (let pipe of pipes) {
        if (
          bird.x < pipe.x + pipeWidth &&
          bird.x + bird.width > pipe.x &&
          (bird.y < pipe.top || bird.y + bird.height > pipe.bottom)
        ) {
          endGame();
        }
      }
    };

    const drawScore = () => {
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${score}`, 10, 30);
      ctx.fillText(`High Score: ${highScore}`, 10, 55);
    };

    const update = () => {
      const bird = birdRef.current;
      bird.update();
      updatePipes();
      checkCollision();

      pipes.forEach(pipe => {
        if (pipe.x + pipeWidth === bird.x) {
          setScore(prev => prev + 1);
        }
      });
    };

    const draw = () => {
      ctx.fillStyle = "#70c5ce";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const bird = birdRef.current;
      bird.draw();
      drawPipes();
      drawScore();
    };

    const endGame = () => {
      setGameOver(true);
      if (score > highScore) setHighScore(score);
    };

    const loop = () => {
      update();
      draw();
      frames++;
      if (!gameOver) {
        requestRef.current = requestAnimationFrame(loop);
      }
    };

    const flapHandler = () => {
      if (birdRef.current) birdRef.current.flap();
    };

    canvas.addEventListener("click", flapHandler);
    loop();

    return () => {
      canvas.removeEventListener("click", flapHandler);
      cancelAnimationFrame(requestRef.current); // ✅ fix speed increasing
    };
  }, [gameStarted, gameOver, score]);

  const handleStart = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  const handleRestart = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  return (
    <div className="game-container screen-container fade-in" id={props.id || ""}>
      {!gameStarted ? (
        <div className="game-overlay">
          <h1>🎮 Flappy Bird</h1>
          <button onClick={handleStart} className="game-btn">Start Game</button>
        </div>
      ) : (
        <>
          <canvas ref={canvasRef}></canvas>
          {gameOver && (
            <div className="game-overlay">
              <h2>💀 Game Over</h2>
              <p>Score: {score}</p>
              <p>High Score: {highScore}</p>
              <button onClick={handleRestart} className="game-btn">Try Again</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}