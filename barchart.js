let wrapper = document.querySelector(".wrapper");

function getNumberOfCustomers() {
    return Math.floor(Math.random() * 36);
};

setInterval(createBarchart, 500);

function createBarchart() {
    const queueSize = getNumberOfCustomers();
    let bar = document.createElement("div");
    bar.setAttribute("class", "bar");
    console.log(bar);
    bar.style.height = queueSize * 10 + "px";
    bar.style.marginTop = 400 - (queueSize * 10) + "px";
    let span = document.createElement("span");
    span.setAttribute("class", "number");
    span.textContent = "" + queueSize * 10;
    span.style.height = queueSize * 10 + 20 + "px";
    span.style.width = "20px";
    bar.addEventListener("mouseover", function () {
        span.style.display = "block";
    });
    bar.addEventListener("mouseout", function () {
        span.style.display = "none";
    })
    bar.appendChild(span);
    wrapper.appendChild(bar);
    bar.style.backgroundColor = "rgb(242," + (170 - (queueSize * 5)) + ", 71)";
    if (wrapper.children.length > 40) {
        wrapper.removeChild(wrapper.childNodes[0]);
    }
}