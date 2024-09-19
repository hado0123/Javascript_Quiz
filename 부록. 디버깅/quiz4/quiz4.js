var ctx = document.getElementById('canvas').getContext('2d')
var width = 1280
var stepX = 10

//var x = 1400
var y = 360
offsetY = 360
var colors = ['#16a085', '#1abc9c', '#2ecc71', '#27ae60', '#9b59b6', '#8e44ad', '#f1c40f', '#f39c12', '#1abc9c']
var cc = 0
var mc = colors.length
var color = colors[cc]

ctx.strokeStyle = color
var lineWidth = 1
ctx.lineWidth = lineWidth
var direction = 1

setInterval(function () {
   ctx.beginPath()
   ctx.moveTo(x, y)

   x = x - stepX
   if (x < 0) {
      x = 1400
      y = 360

      cc++
      if (cc >= mc) {
         cc = 0
      }
      color = colors[cc]
      ctx.strokeStyle = color
      return
   }
   y = Math.sin(x / 50) * 100 + offsetY

   ctx.lineTo(x, y)
   ctx.stroke()

   if (direction === 1) {
      lineWidth += 1
   } else {
      lineWidth -= 1
   }
   if (lineWidth > 80) {
      direction = 0
   } else if (lineWidth < 0) {
      direction = 1
   }

   ctx.lineWidth = lineWidth
}, 1000 / 60)
