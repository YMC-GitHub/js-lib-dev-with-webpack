import { config } from './config.js';
// eslint-disable-next-line object-curly-newline
import { drawBg, drawLine, drawPoint, drawText } from './helper.js';

const settings = {};
settings.modules = {
  bg: { draw: drawBg },
  Text: { draw: drawText },
  Line: { draw: drawLine },
  Point: { draw: drawPoint }
};
const options = {};
options.useBg = true;
options.useText = true;
options.useLine = false;
options.usePoint = true;
settings.options = options;

export default class ValicationCodeImage {
  // eslint-disable-next-line class-methods-use-this
  make(setting) {
    options.Line = setting;
  }

  draw() {
    const { paper } = config;
    // eslint-disable-next-line no-undef
    const canvas = document.getElementById(paper.id);
    let width = canvas.width;
    let height = canvas.height;
    // eslint-disable-next-line no-shadow
    const { options, modules } = settings;
    if (paper.useWH) {
      // eslint-disable-next-line no-multi-assign
      width = canvas.width = paper.w;
      // eslint-disable-next-line no-multi-assign
      height = canvas.height = paper.h;
    }

    const ctx = canvas.getContext('2d');
    /** 绘制背景* */
    if (options.useBg) {
      modules.bg.draw(ctx, width, height);
    }
    /** 绘制文字* */
    if (options.useText) {
      this.text = modules.Text.draw(ctx).text();
      // console.log(modules.Text.draw(ctx).text());
    }
    /** 绘干扰线* */
    if (options.useLine) {
      modules.Line.draw(ctx, width, height);
    }
    /** 绘干扰点* */
    if (options.usePoint) {
      modules.Point.draw(ctx, width, height);
    }
  }
}
