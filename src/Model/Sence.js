import { randomColor } from '../helper.js';

class Sence {
  // eslint-disable-next-line class-methods-use-this
  draw(ctx, width, height) {
    // eslint-disable-next-line no-tabs
    ctx.fillStyle = randomColor(180, 240);
    ctx.fillRect(0, 0, width, height);
  }
}
export { Sence };
