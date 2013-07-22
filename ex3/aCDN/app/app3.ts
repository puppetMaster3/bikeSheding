console.log ("ready 0.3")
viewDir = '../aCDN/views/'

declare var List;   // templates
declare var CloudAPI;   // templates
declare var $;

forward('listTmpl', 'listTmpl', iloaded1)

function iloaded1(id){
    cleanUpViews()
    console.log ("loaded1 " + id)
}

/*var load2But = document.getElementById('load2')
load2But.addEventListener('click', function() {
    console.log ("clicked 2")
    scrollBackground();
    forward('view2', 'form', iloaded2)
 })

function iloaded2(id){
    cleanUpViews()
    console.log ("loaded2")
}
*/
