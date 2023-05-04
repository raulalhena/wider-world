
/*

    Control de menú de dispositivos de pantalla < 800px

*/

// Función cambiar estado de menú hamburguesa, muestra y
// esconde el menú de pantalla completa para dispositivos pantalla < 800px.
const showMenu = () => {
    // Cambia las clases de los elementos .lineX__bars-menu a las indicadas en la función toggle
    document.querySelector(".line1__bars-menu").classList.toggle("activeline1__bars-menu");
    document.querySelector(".line2__bars-menu").classList.toggle("activeline2__bars-menu");
    document.querySelector(".line3__bars-menu").classList.toggle("activeline3__bars-menu");

    // Si el elemento 'nav' tiene una posición right de 0px cambia a -1000px. Si no, cambia a 0px.
    if (document.getElementById("nav").style.right === "0px") {
        document.getElementById("nav").style.right = "-1000px";
    } else {
        document.getElementById("nav").style.right = "0px";
    }

}

// let registerButton = document.getElementById("btn-register-send");

// registerButton.addEventListener("click", () => {
//     alert("Registrado!");
// });

// Añadimos un evento 'click' a los spans (menu hamburguesa) para cambiar su estado a X y mostrar 
// el menú de pantalla completa y esconderlo.
document.getElementById("bars_menu").addEventListener("click", showMenu);


/*

    Control de carrusel

*/
const row = document.querySelector(".carousel_inner_container");
const packs = document.querySelectorAll(".travel_pack");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

rightArrow.addEventListener("click", () => {
    row.scrollLeft += row.offsetWidth;

    const activeIndicator = document.querySelector(".carousel_indicators .indicator_active");
    if (activeIndicator.nextSibling) {
        activeIndicator.nextSibling.classList.add("indicator_active");
        activeIndicator.nextSibling.classList.remove("indicator_active");
    }
});

leftArrow.addEventListener("click", () => {
    row.scrollLeft -= row.offsetWidth;

    const activeIndicator = document.querySelector(".carousel_indicators .indicator_active");
    console.log("izq indicador: ", activeIndicator)
    if (activeIndicator.previousSibling) {
        activeIndicator.previousSibling.classList.add("indicator_active");
        activeIndicator.previousSibling.classList.remove("indicator_active");
    }
});


/*

    Control de paginación del carrusel

*/

const numberPages = Math.ceil(packs.length / 5);
for (let i = 0; i < numberPages; i++) {
    const indicator = document.createElement("button");

    if (i === 0) {
        indicator.classList.add("indicator_active");
        console.log("i = 0", indicator.classList)
    }

    document.querySelector(".carousel_indicators").appendChild(indicator);
    indicator.addEventListener("click", (e) => {
        row.scrollLeft = i * row.offsetWidth;

        document.querySelector(".carousel_indicators .indicator_active").classList.remove("indicator_active");
        e.target.classList.add("indicator_active");
    });
}