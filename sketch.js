const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0400 && hour<=0600){
        bg = "sunrise1.png";
    }
    else if(hour>=0600 && hour<=0800){
        bg = "sunrise2.png";
    }
    else if(hour>=0800 && hour<=1000){
        bg = "sunrise3.png";
    }
    else if(hour>=1000 && hour<=1200){
        bg = "sunrise4.png";
    }
    else if(hour>=1200 && hour<=1400){
        bg = "sunrise5.png";
    }
    else if(hour>=1400 && hour<=1600){
        bg = "sunrise6.png";
    }
    else if(hour>=1600 && hour<=1800){
        bg = "sunset7.png";
    }
    else if(hour>=1800 && hour<=2000){
        bg = "sunset8.png";
    }
    else if(hour>=2000 && hour<=2200){
        bg = "sunset9.png";
    }
    else if(hour>=2200 && hour<=0000){
        bg = "sunset10.png";
    }
    else if(hour>=0000 && hour<=0200){
        bg = "sunset11.png";
    }
    else {
        bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg);
    
}
