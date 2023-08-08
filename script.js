const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");


let activeClass = 1;
next.addEventListener("click", () => {
    activeClass++;

    if (activeClass > circles.length) {
        activeClass = circles.length;
    }

    // console.log(activeClass);

    update();
});

prev.addEventListener("click", () => {
    activeClass--;

    if (activeClass < 1) {
        activeClass = 1;
    }

    // console.log(activeClass);

    update();
});


function update() {
    circles.forEach((circle, idx) => {
        if (idx < activeClass) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    var actives = document.querySelectorAll(".active");

    // console.log((actives.length-1)/(circles.length-1));

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

    if (activeClass === 1) {
        prev.disabled = true;
    } else if (activeClass === circles.length) {
        next.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}