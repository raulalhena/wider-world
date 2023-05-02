
const showMenu = () => {
    document.querySelector(".line1__bars-menu").classList.toggle("activeline1__bars-menu");
    document.querySelector(".line2__bars-menu").classList.toggle("activeline2__bars-menu");
    document.querySelector(".line3__bars-menu").classList.toggle("activeline3__bars-menu");
    if (document.getElementById("nav").style.right === "0px") {
        console.log("Valor: ", document.getElementById("nav").style.right, "cambio a -1000px")
        document.getElementById("nav").style.right = "-1000px";
    } else {
        console.log(document.getElementById("nav").style.right)
        console.log(document.getElementById("nav").style.right, "cambio a 0px")
        document.getElementById("nav").style.right = "0px";
    }

}

document.getElementById("bars_menu").addEventListener("click", showMenu);

