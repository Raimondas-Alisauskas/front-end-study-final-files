let scrollDownBtn = document.getElementById(`scrollDownBtn`)
let scrollUpBtn = document.getElementById(`scrollUpBtn`)

scrollDownBtn.addEventListener('click', function() {
    scrollDown();

});
scrollUpBtn.addEventListener('click', function() {
    scrollUp();
});

function scrollDown() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}