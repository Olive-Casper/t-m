noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
name1 = "";



function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(500, 500);
    canvas.position(900, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}


function modelLoaded()
{
    console.log("model is initialized");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX= " + noseX +"noseY= " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw()
{
    name1 = document.getElementById("text-input").value;
    background("grey");
    stroke("lightpink");
    text(name1, noseX, noseY);
    textSize(difference);
}