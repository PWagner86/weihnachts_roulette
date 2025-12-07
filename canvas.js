import Snowball from "./snowball.js";

export default class Canvas {

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
    this.lastTime = 0;
    this.snowCount = 300;
    this.snowBalls = [];
  }

  init() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.#fillSnowBalls();
    console.log(this.snowBalls);
    this.#animate();
  }

  #fillSnowBalls() {
    for(let i = 0; i < this.snowCount; i++) {
      const speed = Math.floor(Math.random() * 200 + 1);
      this.snowBalls.push(new Snowball(this.width, this.height, speed));
    }
  }

  #animate() {
    requestAnimationFrame((t) => {
      const deltaTime = t - this.lastTime;
      this.lastTime = t;
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.snowBalls.forEach(ball => {
        ball.draw(this.ctx);
        ball.fall()
      })
      this.#animate();
    });
  }
}