const botonMenu = document.getElementById("boton_menu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", () => {

    menu.classList.toggle("activo");

    if (menu.classList.contains("activo")) {
        botonMenu.textContent = "✕";
    } else {
        botonMenu.textContent = "☰";
    }

});
