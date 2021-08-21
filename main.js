noseX=0;
noseY=0;
eyeX=0;
eyeY=0;
function preload() 
{
    clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
    glasses = loadImage("https://i.postimg.cc/yWq05p8j/glasses-removebg-preview-1.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        eyeX = results[1].pose.Eye.x;
        eyeY = results[1].pose.Eye.y;

        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);

    }
}
function draw()
{
image(video, 0, 0, 300, 300);
image(clown_nose, noseX-13, noseY-15, 30, 30);
image(glasses, eyeX, eyeY, 40, 40);
}

function take_snapshot()
{
save('myFilterImage.png');
}