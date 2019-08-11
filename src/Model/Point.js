/* eslint-disable class-methods-use-this */
import { randomColor, randomNum } from '../helper.js';

class Point {
  draw(ctx, width, height) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = randomColor(0, 255);
      ctx.beginPath();
      ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}

export { Point };
