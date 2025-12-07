export default class Snowball {
  constructor(maxWidth, height, speed) {
    this.maxWidth = maxWidth
    this.maxHeight = height + 100;
    this.x = Math.floor(Math.random() * this.maxWidth);
    this.y = (Math.floor(Math.random() * 2000 + 10)) * -1;
    this.speed = Math.random(speed) + 0.5;
  }

  draw(ctx) {
    ctx.fillStyle = "#A7D3F2";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill()
  }

  fall() {
    this.y += this.speed;
    if(this.y > this.maxHeight) this.y = -100;
  }
}