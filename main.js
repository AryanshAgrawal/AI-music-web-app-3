leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
peterpan="music2.mp3";
harrypotter="music2.mp3";
function preload(){
    songhp = loadSound("music2.mp3");
    songpp=loadSound("music.mp3");

}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modalloaded);
    posenet.on('pose', gotresult);
}
function draw(){
image(video, 0, 0, 600, 500);
}
function modalloaded(){
    console.log("Posenet is Initialized");
}
function gotresult(results){
    if (results.length > 0) {
        scoreleftwrist = results[0].pose.keypoints[9].score;
console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("leftwristx=" + leftwristx + " leftwristy=" + leftwristy);
        console.log("rightwristx=" + rightwristx + " rightwristy=" + rightwristy);
}
}