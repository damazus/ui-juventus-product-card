function getQuantity() {
    return parseInt(document.querySelector("#card__quantity").innerText);
}

document.addEventListener("DOMContentLoaded", function () {
    // size active
    const sizes_items = document.querySelectorAll(".card-size-item");
    const sizes = document.querySelectorAll(".card-size-link");

    sizes.forEach(size => {
        size.addEventListener("click", function () {
            sizes_items.forEach(item => item.classList.remove("is-active"));
            this.parentElement.classList.add("is-active")
        })
    });

    // quantity increment/decrement
    let up = document.querySelector("#card-quantity-btn--up");
    let down = document.querySelector("#card-quantity-btn--down");
    let quantity = document.querySelector("#card__quantity");

    up.addEventListener("click", function () {
        let number = getQuantity();
        quantity.innerHTML = ++number;
    });

    down.addEventListener("click", function () {
        let number = getQuantity();

        if(number <= 1) return;
        quantity.innerHTML = --number;
    })
});