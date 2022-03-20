function openNav () {
    var id = document.getElementById("cabecalho");

    if (id.className === "cabecalho") {
        id.className += " menujs";
        document.getElementById("menu-icon").innerHTML = "&Cross;";
    } else {
        id.className = "cabecalho";
        document.getElementById("menu-icon").innerHTML = "&#9776;";
    }
}