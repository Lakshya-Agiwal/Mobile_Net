function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(600,350);
  
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet" , modelLoaded);
  
  
}
function draw()
{
  image(video,0,0,300,300);
  classifier.classify(video,got_result);
}
function modelLoaded()
{
  console.log(ml5.version);
 
  
}
function got_result(error,result)
{
  if (error)
  {
    console.log(error);
  }
  else
  {
    
    console.log(result);
    document.getElementById("obj").innetHTML = result[0].label;
    document.getElementById("acc").innetHTML = Math.round(result[0].confidence*100)+"%";
  }
}




