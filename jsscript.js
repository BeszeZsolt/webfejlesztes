function beallit(o) {
    localStorage.setItem("oldal", o);
}
function oldalcsere() {
    let oldal = localStorage.getItem("oldal");
    if (oldal == "vilagos") {
        inaktiv_oldal = "sotet";
    }
    else {
        inaktiv_oldal = "vilagos";
    }
    localStorage.setItem("oldal", inaktiv_oldal);
}
function setside() {
    let oldal = localStorage.getItem("oldal");
    let articles = document.getElementsByTagName("article");
    let a, b;

    if (oldal == "vilagos") {
        inaktiv_oldal = "sotet";
        b = "empire";
    }
    else {
        inaktiv_oldal = "vilagos";
        b = "rebellion";
    }
    document.getElementById(b).classList.add("hidden");
    for (var i = 0; i < articles.length; i++) {
        articles[i].classList.add(oldal);
        articles[i].classList.remove(inaktiv_oldal);
    }
}
function mouse_over() {
    let oldal = localStorage.getItem("oldal");
    let a, b;

    if (oldal == "vilagos") {
        a = "rebellion";
        b = "empire";
    }
    else {
        a = "empire";
        b = "rebellion";
    }
    document.getElementById(a).classList.add("hidden");
    document.getElementById(b).classList.remove("hidden");
}
function mouse_out() {
    let oldal = localStorage.getItem("oldal");
    let a, b;

    if (oldal == "vilagos") {
        a = "rebellion";
        b = "empire";
    }
    else {
        a = "empire";
        b = "rebellion";
    }
    document.getElementById(b).classList.add("hidden");
    document.getElementById(a).classList.remove("hidden");
}
function kezdolap() {
    let oldal = localStorage.getItem("oldal");
    if (oldal == "vilagos") {
        return "0vilagos.html";
    }
    else {
        return "0sotet.html";
    }
}

function datum()
{
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    minYear=currentYear+"-01-01";
    maxYear=currentYear+"-12-31";
    document.getElementById("3").setAttribute("min", minYear);
    document.getElementById("3").setAttribute("max", maxYear);
}
function feldolgoz() {
    let pont = 0;
    const a = document.getElementById("1").value;
    const b = document.getElementById("2").value;
    const c = document.getElementById("3").value;
    const d = document.getElementById("4b").checked;
    const e = document.getElementById("5").value;
    const f = document.getElementById("6c").checked;
    const g = document.getElementById("7d").checked;
    const h = document.getElementById("8").value;
    if (a == "Baljós árnyak") {
        pont = pont + 1;
    }
    if (b == 1) {
        pont = pont + 1;
    }
    if (c == "2023-05-04") {
        pont = pont + 1;
    }
    if (d == true) {
        pont = pont + 1;
    }
    if (e == 4) {
        pont = pont + 1;
    }
    if (f == true) {
        pont = pont + 1;
    }
    if (g == true) {
        pont = pont + 1;
    }
    if (h == "Ez egy csapda" || h == "Ez egy csapda!" || h == "Ez egy csapda." ||
        h == "ez egy csapda" || h == "ez egy csapda!" || h == "ez egy csapda.") {
        pont = pont + 1;
    }
    alert(`Összesen ${pont} pontot értél el a 8-ból!`);
}