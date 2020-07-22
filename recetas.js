document.getElementById("receta-1-btn1").addEventListener("click", function mostrarReceta () {
    document.querySelector(".front").setAttribute("style", "transform: rotateY(-180deg)");
    document.querySelector(".back").setAttribute("style", "transform: rotateY(0)");
    document.getElementById("receta-1-btn1").setAttribute("style", "display: none");
    document.getElementById("receta-1-btn2").setAttribute("style", "display: block");
});

document.getElementById("receta-1-btn2").addEventListener("click", function ocultarReceta () {
    document.querySelector(".back").setAttribute("style", "transform: rotateY(180deg)");
    document.querySelector(".front").setAttribute("style", "transform: rotateY(0)");
    document.getElementById("receta-1-btn1").setAttribute("style", "display: block");
    document.getElementById("receta-1-btn2").setAttribute("style", "display: none");
});


