var date_time = document.getElementById("button");

var text = document.getElementById("text");

date_time.addEventListener("mousehover", () => {
    $('[data-toggle="tooltip"]').tooltip();

})
date_time.addEventListener("click", () => {
    document.getElementById("text").innerHTML = new Date();
})
text.addEventListener("focus", () => {
    text.style.backgroundColor = "violet";
});
text.addEventListener("focusout", () => {
    text.style.backgroundColor = "white"
});
text.addEventListener("mouseenter", () => {
    text.style.backgroundColor = "green"
});
text.addEventListener("mouseleave", () => {
    text.style.backgroundColor = "blue"
})