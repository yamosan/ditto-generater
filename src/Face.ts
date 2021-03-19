import p5 from 'p5'

class Face {
  constructor(
    private p: p5,
    public x: number,
    public y: number,
  ) { }

  update() {}

  display() {
    this.p.push()
    this.p.translate(this.x, this.y)
    this.p.strokeWeight(3)

    this.p.noFill()
    this.p.stroke(50)
    this.p.beginShape()
    this.p.curveVertex(-100, -20)
    this.p.curveVertex(-60, 10)
    this.p.curveVertex(60, 10)
    this.p.curveVertex(100, -20)
    this.p.endShape()

    this.p.fill(20)
    this.p.ellipse(-40, -10, 5, 5)
    this.p.ellipse(40, -10, 5, 5)

    this.p.pop()
  }
}

export default Face