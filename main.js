//https://teachablemachine.withgoogle.com/models/EAr0Mb_fQ/
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EAr0Mb_fQ/model.json', modelready)
}
function modelready(){
    classifier.classify(gotResults)
}
function gotResults(error, results){
    console.log( "got result");
}