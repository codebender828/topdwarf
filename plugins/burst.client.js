import mojs from 'mo-js'

const burst = new mojs.Burst({
  radius: { 0: 100 },
  count: 20,
  children: {
    shape: 'cross',
    stroke: 'teal',
    strokeWidth: { 3: 0 },
    angle: { 360: 1 },
    radius: { 30: 5 },
    duration: 2000
  }
})

const burst2 = new mojs.Burst({
  radius: { 0: 50 },
  count: 20,
  children: {
    shape: 'cross',
    stroke: { 'magenta': 'red' },
    strokeWidth: { 1: 0 },
    angle: { 360: 0 },
    radius: { 30: 5 },
    opacity: { 1: 0 },
    duration: 2000
  }
})

const burst3 = new mojs.Burst({
  radius: { 0: 150 },
  count: 5,
  children: {
    color: 'purple',
    angle: { '-360': 0 },
    radius: { 15: 10 },
    opacity: { 1: 0 },
    duration: 2000
  }
})

const circBase = {
  radius: { 0: 150 },
  fill: 'none',
  stroke: 'yellow',
  opacity: { 1: 0 },
  duration: 2500
}

const circ = new mojs.Shape({
  ...circBase
})

const circ2 = new mojs.Shape({
  delay: 500,
  ...circBase
})

const timeline = new mojs.Timeline({
  repeat: 999
})
  .add(burst, burst2, burst3, circ, circ2)
  .play()

console.log(timeline)
