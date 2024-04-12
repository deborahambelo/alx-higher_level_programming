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

  print () {
    let i = 0;
    for (i = 0; i < this.height; i++) {
      let line = '';
      for (let j = 0; j < this.width; j++) {
        line += 'X';
      }
      console.log(line);
    }
  }

  rotate () {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double () {
    const temp = this.width;
    const temp2 = this.height;
    this.width = 2 * temp;
    this.height = temp2 * 2;
  }
}
module.exports = Rectangle;
