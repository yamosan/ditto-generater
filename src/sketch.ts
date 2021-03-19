import p5 from 'p5'
import Metamon from './Metamon'
import DistortedPolygon from './DistortedPolygon'
import Face from './Face'

const sketch = (p: p5) => {
  let metamon: Metamon

  let rSlider: p5.Element
  let nVertexSlider: p5.Element
  let amplitudeSlider: p5.Element
  let dtSlider: p5.Element

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    metamon = new Metamon(
      p,
      p.width / 2,
      p.height / 2,
      new DistortedPolygon(p, 0, 0, 200, 10, 150, p.color(234, 189, 232)),
      new Face(p, 0, -30)
    )
    setupSliders()
  }
  
  p.draw = () => {
    p.background(255)

    updateNVertex()
    updateR()
    updateAmplitude()
    updateDt()

    metamon.update()
    metamon.display()
  }

  function setupSliders() {
    rSlider = p.createSlider(100, 500, 200)
    rSlider.position(30,30)
    nVertexSlider = p.createSlider(3, 100, 10)
    nVertexSlider.position(30, 70)
    amplitudeSlider = p.createSlider(0, 80, 75)
    amplitudeSlider.position(30, 110)
    dtSlider = p.createSlider(0.01, 0.2, 0.01, 0.01)
    dtSlider.position(30, 150)
  }

  function updateNVertex() {
    const value = nVertexSlider.value()
    if (typeof value === 'number') metamon.shape.nVertex = value
  }
  function updateR() {
    const value = rSlider.value()
    if (typeof value === 'number') metamon.shape.r = value
  }
  function updateAmplitude() {
    const value = amplitudeSlider.value()
    if (typeof value === 'number') metamon.shape.amplitude = value/100 * metamon.shape.r
  }
  function updateDt() {
    const value = dtSlider.value()
    if (typeof value === 'number') metamon.shape.dt = value
  }
}

export default sketch