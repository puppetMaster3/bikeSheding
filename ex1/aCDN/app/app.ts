console.log ("ready 0.1")
viewDir = '../aCDN/views/'

document.querySelector('#load1').addEventListener('click', onclickone)
function onclickone() {
    console.log ("I just got clicked thank you")
    open('view1', iloaded1)
    console.log("is it loaded?")
 }
function iloaded1(){
    console.log ("loaded1")
 }

var load2But = document.getElementById('load2')
load2But.addEventListener('click', function() {
    console.log ("Test")
    open('view2', iloaded2)

    })
function iloaded2(){
    console.log ("loaded2")
}