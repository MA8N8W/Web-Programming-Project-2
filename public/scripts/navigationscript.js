function toggleMenu() {
    var x = document.getElementById("mainNav");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}

export default toggleMenu()