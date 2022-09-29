var festa = []
function convidar() {
    var GuestName = document.getElementById("convidado").value;
    festa.push(GuestName);
    htmldata = "";
    for(var i=0;i<festa.length;i++){
        htmldata=htmldata+ festa[i] + ","
    }
    document.getElementById("lista_convidados").innerHTML = htmldata;
}

function mostrar()
{
    htmldata = "";
    for(var i=0;i<festa.length;i++){
        htmldata=htmldata+ festa[i] + "<br/>"
    }
    document.getElementById("mostrar_nome").innerHTML = htmldata;
}

function organizar()
{
    var lista_organizada = festa.sort();
    htmldata = "";
    for(var i=0;i<lista_organizada.length;i++){
        htmldata=htmldata+ lista_organizada[i] + "<br/>"
    }
    document.getElementById("organizado").innerHTML = htmldata;
}




function pesquisar() {

    var s = document.getElementById("contar").value;
    var found = 0;
    var j;
    for (j = 0; j < festa.length; j++) {

        if (s == festa[j]) {
            found = found + 1
        }
    }
    document.getElementById("localizado").innerHTML = "Nome encontrado " + found + " vez(es)";
}