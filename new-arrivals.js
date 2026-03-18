let selectedColor = "nude";
let selectedSize = "M";

/* COLOR SWITCHING */

const colors = document.querySelectorAll(".color");
const hoodieImage = document.getElementById("hoodieImage");

colors.forEach(color => {

    color.addEventListener("click", () => {

        colors.forEach(c => c.classList.remove("active"));
        color.classList.add("active");

        const selectedColor = color.dataset.color;

        hoodieImage.src = `hoodie-${selectedColor}.png`;

    });

});


/* SIZE SELECTION */

const sizes = document.querySelectorAll(".sizes span");

sizes.forEach(size=>{
    size.addEventListener("click",()=>{
        sizes.forEach(s=>s.classList.remove("active-size"));
        size.classList.add("active-size");

        selectedSize = size.textContent;
    });
});


/* ADD TO CART */

function addCustomHoodie(){

    const customText = document.getElementById("customText").value;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = {
        name: "Custom Hoodie",
        price: 50,
        color: selectedColor,
        size: selectedSize,
        text: customText
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href="cart.html";
}