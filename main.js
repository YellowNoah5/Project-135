function setup()
{
    canvas = createCanvas(500, 500)
    canvas.position(715,400)

    vid = createCapture(VIDEO)
    vid.hide()
}

function preload()
{
    
}

function draw() 
{
    image(vid, 0, 0, 500, 500)
}