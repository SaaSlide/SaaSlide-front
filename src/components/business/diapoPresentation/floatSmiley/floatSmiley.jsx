import { useContext, useEffect, useRef } from 'react'
import { SocketContext } from '../../../../utils/socket'

import './floatSmiley.scss'

export const FloatSmiley = () => {
  const { socket } = useContext(SocketContext)

  let canvas, ctx, w, h

  let emojis = []

  function randomize(min, max) {
    return Math.random() * (max - min) + min
  }

  function randomReaction(smiley) {
    this.smiley = smiley
    this.x = Math.round(randomize(20, 60))
    this.y = h - Math.round(randomize(40, 50))
    this.speed = randomize(0.2, 0.5)
    this.opacity = 1
    this.size = Math.round(randomize(2, 5))
    this.delay = Math.round(randomize(3, 6))
  }

  function draw() {
    ctx.clearRect(0, 0, w, h)
    emojis.forEach((p, i) => {
      if (p.y < 100) {
        p.opacity -= 0.01
        p.y -= 0.5
      }

      if (p.y < h / 3) {
        p.x += 0.01
      } else if (p.y < h / Math.round(randomize(2, 1.5))) {
        p.x += randomize(0, 0.5)
      } else {
        p.x -= 0.1
      }
      if (p.y <= -300) {
        emojis.splice(i, 1)
      }

      p.y -= p.speed * 10

      ctx.save()
      ctx.globalAlpha = p.opacity
      ctx.setTransform(p.size, 0, 0, p.size, p.x, p.y)
      ctx.fillText(p.smiley, 0, 40, 40, 0, 0, 40, 40)
      ctx.restore()
    })

    requestAnimationFrame(draw)
  }

  useEffect(() => {
    canvas = document.getElementById('canvas-smiley')
    ctx = canvas.getContext('2d')
    w = canvas.clientWidth
    h = canvas.clientHeight
    canvas.width = w
    canvas.height = h

    draw()

    socket.on('get_smiley', (smiley) => {
      emojis.push(new randomReaction(smiley))
    })
  })

  return <canvas id="canvas-smiley" className="canvas-smiley"></canvas>
}
