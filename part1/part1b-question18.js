function callback(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
var intervalID = setInterval(callback, 1000);