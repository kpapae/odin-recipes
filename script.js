let metricButton = document.getElementById("metric-btn");
let imperialButton = document.getElementById("imperial-btn");

let ingredients = document.getElementsByClassName("ingredient");

function changeUnits(unit) {
    for (let i = 0; i < ingredients.length; i++) {
        let item = ingredients[i];
        let metricSpan = item.querySelector(".metric-measurement");
        let imperialSpan = item.querySelector(".imperial-measurement");

        if (metricSpan && imperialSpan) {
            if (unit === "metric") {
                metricSpan.style.display = "";
                imperialSpan.style.display = "none";
            } else {
                metricSpan.style.display = "none";
                imperialSpan.style.display = "";
            }
        } else {
        }
    }

    if (unit === "metric") {
        metricButton.classList.add("selected");
        imperialButton.classList.remove("selected");
    } else {
        imperialButton.classList.add("selected");
        metricButton.classList.remove("selected");
    }
}

metricButton.addEventListener("click", function() {
    changeUnits("metric");
});

imperialButton.addEventListener("click", function() {
    changeUnits("imperial");
});