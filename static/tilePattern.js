class Tiles {
  draw(context, x, y, width, height) {
    var leftToRight = Math.random() >= 0.5

    if (leftToRight) {
      context.moveTo(x, y)
      context.lineTo(x + width, y + height)
    } else {
      context.moveTo(x + width, y)
      context.lineTo(x, y + height)
    }
  }

   paint(ctx, geom, properties) {
    ctx.lineWidth = 1
    const iWidth = geom.width;
    const iHeight = geom.height;
    const step = iWidth / 70 // proportion of width to use as a step

    for (var x = 0; x < iWidth; x += step) {
      for (var y = 0; y < iHeight; y += step) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${x}, ${y}, ${x * y}, 0.5)`

        this.draw(ctx, x, y, step, step)

        ctx.stroke()
      }
    }

    
    ctx.closePath()
  }
}

registerPaint("tilePattern", Tiles)
