function preload() {

    ballonsImage=loadImage("final.webp")
    ageImage=loadImage("27.jpg")
}

function setup(){
    createCanvas(windowWidth,windowHeight)

    console.log(false)

    ballon=createSprite(350,340,width/2,height/2)
    ballon.addImage("running",ballonsImage)
    ballon.scale= 2.2

    age=createSprite(500,400,windowWidth,windowHeight)
    age.addImage("playing",ageImage)

}

function draw(){
    background("lime")
    drawSprites()
  
    textSize(45)
    fill("black")
    text("Happy Birthday Di You are very nice"400,100)
}
