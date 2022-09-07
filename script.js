function comprobar_conexion(){
    console.log("page loaded...");
}

function cambiar_imagen(elemento){
console.log(elemento.src);

if (elemento.src == 'assets/karocat.png'){
    elemento.src = 'assets/maxtocat.gif';
}
else {
    elemento.src = 'assets/mona-the-rivetertocat.png';
}
}
function cambiar_imagen(elemento){
console.log(elemento.src);
    if (elemento.src == 'assets/karocat.png'){
        elemento.src = "assets/daftpunktocat-guy.gif";
    }
    else {
        elemento.src = 'assets/octocat-de-los-muertos.jpg';
    }
}
function cambiar_imagen(elemento){
console.log(elemento.src);

    if (elemento.src == 'assets/karocat.png'){
        elemento.src = 'assets/hula_loop_octodex03.gif';
    }
    else {
        elemento.src = 'assets/mona-the-rivetertocat.png';
    }
}
function cambiar_imagen(elemento){
console.log(elemento.src);

    if (elemento.src == 'assets/karocat.png'){
        elemento.src = 'assets/nyantocat.gif';
    }
    else {
        elemento.src = 'assets/mona-the-rivetertocat.png';
    }
}

function over(event) {
    event.play()
    event.muted ="false"
}
function out(event) {
    event.pause()
    event.muted ="true"
}