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
        //rectangular boxes
        // ctx.beginPath()
        // ctx.fillStyle = color
        // ctx.strokeStyle = strokeColor
        // ctx.rect(this.i*w, this.j*h, w, h)
        // ctx.fill()
        // ctx.stroke()
        
        //circular
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.strokeStyle = strokeColor
        ctx.arc(this.i*w+(w/2), this.j*h+(h/2), w/2, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.fill()
    }
}
