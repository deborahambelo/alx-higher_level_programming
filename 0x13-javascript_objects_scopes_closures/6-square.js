#!/usr/bin/node
const Sq = require('./5-square.js');
class Square extends Sq {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      let i = 0;
      for (i = 0; i < this.height; i++) {
        let line = '';
        for (let j = 0; j < this.width; j++) {
          line += 'C';
        }
        console.log(line);
      }
    }
  }
}
module.exports = Square;
