var duration = 2;
var arrayImg = new Array();
arrayImg[0] = "https://i.imgur.com/AUmxR5f.jpeg";
arrayImg[1] = "https://i.imgur.com/wp9JSyC.jpeg";
arrayImg[2] = "https://i.imgur.com/HmDUCqy.jpeg";
arrayImg[3] = "https://i.imgur.com/7Uv4yBW.jpeg";

function getRandomImage(imgAr) {
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    return img;
};

function fillImg(imgId) {
  var tgt = document.querySelector(imgId);
  tgt['src'] = getRandomImage(arrayImg);
};

function fader() {
  var tgt = document.querySelector('#target');
  fillImg('#target');
  tgt.style.opacity = 1;
  
  tgt.ontransitionend = () => {
    if (tgt.style.opacity == 1) {
      setTimeout(() => {tgt.style.opacity = 0;}, duration*1000);
    }
  }
}
var transitionTime = window.getComputedStyle(document.querySelector('#target')).getPropertyValue('transition-duration').match(/\d+/)[0];
var totalTime = duration*1000 + transitionTime*2000;
setInterval(fader, totalTime);