function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "People that like this website " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "error...";
    }
}



