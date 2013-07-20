console.log ("ready 0.20")
viewDir = '../aCDN/views/'

declare var TweenLite; //animation
declare var List;   // templates

var load1But = document.getElementById('load1')
load1But.addEventListener('click', function() {
    console.log ("clicked 1")
    forward('view1', 'view1', iloaded1)
  })
function iloaded1(id){
    cleanUpViews()
    console.log ("loaded1 " + id)
    var div=document.getElementById(id)
    TweenLite.from(div,.4
        ,{css:{rotationY:-90, transformOrigin:"300% ",  rotation:-1}
            ,onComplete:function(){
            console.log('animated') }
        })
 }

var load2But = document.getElementById('load2')
load2But.addEventListener('click', function() {
    console.log ("Test")
    forward('view2', 'form', window.iloaded2)
 })

function iloaded2(id){
    cleanUpViews()
    console.log ("loaded2")
}