class cell{
    constructor(i, j){
        this.i = i 
        this.j = j 
        this.blocked = false
    }
    show(ctx, w, h, col){
        let color, strokeColor
        if(col){
            color = col
        }else if(this.blocked){
            color = 'rgba(0,0,0, 1)'
            strokeColor = 'white'
        }else{
            color = "rgb(255,255,255, 1)"
            strokeColor = 'black'
        }
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.strokeStyle = strokeColor
        ctx.rect(this.i*w, this.j*h, w, h)
        ctx.fill()
        ctx.stroke()

    }
}