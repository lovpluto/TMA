var animation = lottie.loadAnimation({
    container: document.getElementById('bm'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './json/fullAnimateForWeb.json' // the path to the animation json
  });
var animation1 = lottie.loadAnimation({
    container: document.getElementById('logoOne'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './json/tmaLogoFirst.json' // the path to the animation json
  });
var animation2 = lottie.loadAnimation({
    container: document.getElementById('logoTwo'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './json/tmaLogoSecond.json' // the path to the animation json
  });
var animation3 = lottie.loadAnimation({
    container: document.getElementById('logoThree'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './json/tmaLogoThird.json' // the path to the animation json
  });
var animation4 = lottie.loadAnimation({
    container: document.getElementById('logoFour'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './json/tmaLogoFour.json' // the path to the animation json
  });
var animation5 = lottie.loadAnimation({
    container: document.getElementById('logoFive'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './json/tmaLogoFive.json' // the path to the animation json
  });


setInterval(() => {
  animation,animation1,animation2,animation3,animation4,animation5
}, 500);
