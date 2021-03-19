import p5 from 'p5'

class DistortedPolygon {
  angle: number
  // 頂点の座標
  px: number[]
  py: number[]

  constructor(
    private p: p5,
    public x: number,
    public y: number,
    public r: number,
    public nVertex: number,
    public amplitude = r * 0.2,
    public color: p5.Color,
    public dt = 0.01,
    public seed = 1,
  ) {
    this.angle = p.TWO_PI / nVertex
    this.px = new Array(this.nVertex)
    this.py = new Array(this.nVertex)   
  }

  update() {
    this.px = new Array(this.nVertex)
    this.py = new Array(this.nVertex)
    this.angle = this.p.TWO_PI / this.nVertex
    for (let i = 0; i < this.nVertex; i++) {
      const noise = this.p.map(this.p.noise(i, this.p.frameCount*this.dt, this.seed), 0, 1, -1, 1)
      this.py[i] = this.p.sin(this.angle * i) * (this.r + (this.amplitude * noise))
      this.px[i] = this.p.cos(this.angle * i) * (this.r + (this.amplitude * noise))
    }
  }

  display() {
    this.p.push()
    this.p.translate(this.x, this.y)
    this.p.fill(this.color)
    this.p.beginShape()

    this.p.curveVertex(this.px[this.nVertex - 1], this.py[this.nVertex - 1])
    for (let i = 0; i < this.nVertex; i++) {
      this.p.curveVertex(this.px[i], this.py[i])
    }
    this.p.curveVertex(this.px[0], this.py[0])
    this.p.curveVertex(this.px[1], this.py[1])

    this.p.endShape()
    this.p.pop()
  }
}

export default DistortedPolygon