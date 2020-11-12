export default class Scrabble {
  constructor(play) {
    if(play === 'a'){
      this.score = 1;
    } else if(play === 'f') {
      this.score = 4;
    } else {
      this.score = 0;
    } 
  }
}