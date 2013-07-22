console.log("ready 0.3");
viewDir = '../aCDN/views/';

forward('listTmpl', 'listTmpl', iloaded1);

function iloaded1(id) {
    cleanUpViews();
    console.log("loaded1 " + id);
    var but1 = document.getElementById('but1');
    but1.addEventListener('click', function () {
        console.log("clicked ");
    });
}
//@ sourceMappingURL=app3.js.map
