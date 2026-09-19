//catch DOM elements
const button = document.getElementById("button")
const price = document.getElementById("price")
const total = document.getElementById("total")

//state on data
const productPice = 5000
let totalPrice = 0

//set product price initial
price.innerText =`৳ ${productPice}`
total.innerText = `Total: ৳ 0`


button.addEventListener("click", () => {
    totalPrice += productPice

    // update ui
    total.innerText = `Total: ৳ ${totalPrice}`
})