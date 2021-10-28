import faker from "faker";

let products = "";

for(var i = 0 ; i < 3 ; i++){
    const pro = faker.commerce.productName();
    products += `<div>${pro}</div>`
}

document.querySelector("#productes_container").innerHTML = products;