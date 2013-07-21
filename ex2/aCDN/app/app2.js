console.log("ready 0.22");
viewDir = '../aCDN/views/';

var load1But = document.getElementById('load1');
load1But.addEventListener('click', function () {
    console.log("clicked 1");
    scrollBackground();
    forward('view1', 'view1', iloaded1);
});
function iloaded1(id) {
    cleanUpViews();
    console.log("loaded1 " + id);
    var div = document.getElementById(id);
    TweenLite.from(div, .4, {
        css: { rotationY: -90, transformOrigin: "300% ", rotation: -1 },
        onComplete: function () {
            console.log('animated');
        }
    });
}

var load2But = document.getElementById('load2');
load2But.addEventListener('click', function () {
    console.log("clicked 2");
    scrollBackground();
    forward('view2', 'form', iloaded2);
});

function iloaded2(id) {
    cleanUpViews();
    console.log("loaded2");
}

open('backLayer', 'back', onBackLoaded);
function onBackLoaded() {
    setTimeout(function () {
        document.getElementById("animatingTile").style.backgroundImage = "url(../aCDN/assets/parallax_clouds.png)";
        setupBackground();
    }, 1);
}

function scrollBackground() {
    if (inProgress) {
        return;
    }
    inProgress = true;
    tweenBack.play();
    setTimeout(function () {
        console.log('parallax');
        tweenBack.pause();
        inProgress = false;
    }, 800);
}

function setupBackground() {
    console.log('background:');
    inProgress = false;
    var lefty1 = $('#animatingTile').position().left;
    tweenBack = TweenMax.from($('#animatingTile'), 12, {
        css: { left: lefty1 - 1618 },
        repeatDelay: 0,
        useFrames: false,
        repeat: -1,
        ease: Linear.easeNone
    });
    tweenBack.pause();
}
//@ sourceMappingURL=app2.js.map
