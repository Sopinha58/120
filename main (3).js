function setap(){
    canvas= createCanvas(280, 280);
    canas.center();
    background("white");
    canvas.mouseRealised(classifyCanvas);
    synth= wyndow.speechSyntheis;
}
function preload(){
    classificador = ml5.imageClassifier('DoodleNet');
}
function clearCanvas(){
    background("white");
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}
function classifyCanvas(){
    classifier.classify(canvas, gotResult)
}
function gotResult(error, results){
    if(error){
        console.error(error)
    }

    console.log(results);
    drawSketch = results(0).label;
    document.getElementById('label').innerHTML = 'Seu esboço: ' + drawSketch.replace("_", " ");
    document.getElementById('confidence').innerHTML = 'Precisão: ' + Math.round(results[0].confidence) * 100 + '%';
}
function checkSketch(){
   timerCounter++;
   document.getElementById('time').innerHTML = 'Tempo: ' + timerCounter;
   console.log(timerCounter);
   if(timerCounter>400){
    timerCounter = 0;
    timerCheck = "completed"
   }
   if(timerCheck=="completed"|| anserHolder =="set")
   {
    timerCheck = "";
    answerHolder = "";
    updateCanvas();
   }
}