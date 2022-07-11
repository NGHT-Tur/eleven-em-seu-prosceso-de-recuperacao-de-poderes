var ball;
var upsidedown;
var cantadas;

function setup(){
    upsidedown = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var cantadas3ponto0= upsidedown.ref("pingpong/regua");
    cantadas3ponto0.on("value", mel, ana);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        umavibebemsaudavel(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        umavibebemsaudavel(1,0);
    }
    else if(keyDown(UP_ARROW)){
        umavibebemsaudavel(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        umavibebemsaudavel(0,+1);
    }
    drawSprites();
}

function umavibebemsaudavel(x,y){
    upsidedown.ref("pingpong/regua").set({
    "x":cantadas.x+x,
    "y":cantadas.y+y,
    });
}

function ana(){
    console.log("servidores offline aguarde um segundo.")
}

function mel(celular){
    cantadas=celular.val();
    ball.x=cantadas.x;
    ball.y=cantadas.y;

}