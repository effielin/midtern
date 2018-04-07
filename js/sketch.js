var sound;
var amp;
var video;
var slider;

function preload(){
    sound = loadSound("audio/RAOnO.mp3");
}

function setup() {
    canvas = createCanvas(640, 480, WEBGL);
    canvas.id('p5canvas');
    background(51);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.id('p5video');
    // video.hide();
    // slider = createSlider(0, 1, 0.5, 0.01);
    // slider.id('blur-slider');

    sound.play();
    amp = new p5.Amplitude(.5);
    amp.setInput(sound);

    // video effect with seriouly.js
    // tutorial: https://www.youtube.com/watch?v=jdKep6jo7b0
    var seriously = new Seriously();

    var src = seriously.source('#p5video');
    var target = seriously.target('#p5canvas');

    // var blur = seriously.effect('blur');
    // blur.amount = '#blur-slider';
    // blur.source = src;
    // target.source = blur;

    var chroma = seriously.effect('chroma');
    chroma.source = src;
    target.source = chroma;
    var r = 98 / 255;
    var g =175 / 255;
    var b = 116 / 255;
    chroma.screen = [r,g,b,1];


    seriously.go();
}

function draw() {
    // filter(GRAY,1);
}

function mousePressed() {
    if ( sound.isPlaying() ) {
    sound.pause();
  } else {
    sound.play();
  }
}














