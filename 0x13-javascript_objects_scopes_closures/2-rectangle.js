#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      const Rectangle = {};
      return `${Rectangle}`;
    }
  }
}
module.exports = Rectangle;
