//function to reshape the array 
Array.prototype.reshape = function (rows, cols) {
    var copy = this.slice(0); // Copy all elements.
    this.length = 0; // Clear out existing array.
    for (var r = 0; r < rows; r++) {
        var row = [];
        for (var c = 0; c < cols; c++) {
            var i = r * cols + c;
            if (i < copy.length) {
                row.push(copy[i]);
            }
        }
        this.push(row);
    }
    return this
}


let preload = document.querySelector('.preload')
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let video = document.querySelector('video')
let interval

let rows = 30 
let cols = 30
let w = canvas.width/cols 
let h = canvas.height/rows

let grid = new Array(cols)
for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows)
}

for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
        grid[i][j] = new cell(i, j)
    }
}
function draw_grid(){
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].show(ctx, w, h)
        }
    }
}
draw_grid()



if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then(function (stream) {
        video.srcObject = stream
        video.play()
    })
}
let bodypix 
bodyPix.load().then(net=>{
    bodypix = net 
    preload.style.display = 'none'
    console.log(bodypix)
})

function draw(){
    // ctx.drawImage(video, 0, 0, 500, 500)
    if(bodypix){
         bodypix.estimatePersonSegmentation(video, 16, 0.6).then(pix=>{
            let data = []
            for(let i=0; i<pix.data.length; i++){
                data.push(pix.data[i])
            }
            data = data.reshape(cols, rows)
            // console.log(data)
            for(let i=0; i<cols; i++){
                for(let j=0; j<rows; j++){
                    if(data[i][j] == 0){
                        // console.log('false')
                        grid[j][i].blocked = false
                    }else{
                        // console.log('true')
                        grid[j][i].blocked = true
                    }
                }
            }
        })
    }
    draw_grid()
}


interval = setInterval(()=>draw(), 16)
