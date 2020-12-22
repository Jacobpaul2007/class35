var modifiedball,database;
var position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    modifiedball = createSprite(250,250,10,10);
    modifiedball.shapeColor = "red";
    var modifiedballPosition = database.ref("ball/position");
    modifiedballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        'x':position.x+x,
        'y':position.y+y
    })
    
}

function readPosition(data){
    position = data.val();
    modifiedball.x = position.x;
    modifiedball.y = position.y;

}

function showError(){
    console.log("error");
}
