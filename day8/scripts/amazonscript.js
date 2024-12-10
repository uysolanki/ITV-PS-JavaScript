import {products} from '../data/products.js'
console.log(products)

let productCardDiv=''

products.forEach(
    (product)=>{
        productCardDiv+=`<div class="product-card">
        <img src=${product.image} alt=${product.title} heigth="100" width="80"/>
        <p class="card-title">Title :${product.title} </p>
        <p class="card-text">Description : ${product.description}</p>
        <p class="card-text">Price : ${product.price}</p>
        <p class="card-text">Category : ${product.category}</p>
    </div>`
    }
)

document.querySelector('.product-container').innerHTML=productCardDiv



