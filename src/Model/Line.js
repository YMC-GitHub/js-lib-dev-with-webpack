import { randomColor, randomNum } from '../helper.js';

class Line {
  // eslint-disable-next-line class-methods-use-this
  draw(ctx, width, height) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 8; i++) {
      ctx.strokeStyle = randomColor(40, 180);
      ctx.beginPath();
      ctx.moveTo(randomNum(0, width), randomNum(0, height));
      ctx.lineTo(randomNum(0, width), randomNum(0, height));
      ctx.stroke();
    }
  }
}
export { Line };
