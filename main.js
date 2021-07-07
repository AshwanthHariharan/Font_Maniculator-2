
function setup() {

    canvas = createCanvas(600,500);
    
    canvas.position(560,100);
    
    video = createCapture(VIDEO);
    
    video.size(550, 500);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    
    poseNet.on('pose', gotPoses);
    
    }
    
    function draw() {
    
    background('#3287a8');
    
    }
    
    function modelLoaded() {
    
    console.log("PoseNet is Intialized!");
    
    }
    
    function gotPoses(results) {
    
    if(results.length > 0) {
    
    console.log(results);
    
    }
    
    }