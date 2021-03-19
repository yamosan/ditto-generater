import p5 from 'p5'

interface Part {
  update: () => void
  display: () => void
}

interface MovableShape extends Part {
  r: number,
  nVertex: number,
  amplitude: number,
  dt: number
}

class Metamon {
  constructor(
    private p: p5,
    public x: number,
    public y: number,
    public shape: MovableShape,
    public face: Part
  ) { }

  update() {
    this.shape.update()
    this.face.update()
  }

  display() {
    this.p.push()
    this.p.translate(this.x, this.y)
    this.shape.display()
    this.face.display()
    this.p.pop()
  }
}

export default Metamon