class Pig extends BaseClass {
    constructor(x, y) {
      
      super(x,y,50,50);//to transfer all the properties of the parent/base class to child class
      this.image=loadImage("sprites/enemy.png");
    }
  }
  