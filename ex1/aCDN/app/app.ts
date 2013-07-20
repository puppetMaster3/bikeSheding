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

document.querySelector('#load2').addEventListener('click', loadform)
 function loadform(){
    console.log ("Test")
    open('view2', iloaded2)

}
function iloaded2(){
    console.log ("loaded2")
}