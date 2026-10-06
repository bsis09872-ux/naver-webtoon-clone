window.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".Daily_Head .filters button");
    buttons.forEach(el => {
        el.addEventListener("click", function() {
            buttons.forEach(el => el.classList.remove("on"));
            this.classList.add("on");
        });
    });
});