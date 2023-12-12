let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    shoopCart.classList.remove('active');
}

let shoopCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoopCart.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoopCart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoopCart.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

let listCard = document.querySelector('.box');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantityCart')
let products = [
    {
        id: 1,
        cat:1,
        name: "Edifice Casio",
        price: 67.99,
        category: "Men's",
        image: "images/watche (1).jpg",
        description: " Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino"
    },
    {
        cat:1,
        id: 2,
        name: "Henters Race ",
        price: 77.49,
        category: "Men's",
        image: "images/watche (2).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat:1,
        id: 3,
        name: "Omega",
        price: 105.23,
        category: "Children's",
        image: "images/watche (3).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat:2,
        id: 4,
        name: "Seiko",
        price: 88.45,
        category: "Women's",
        image: "images/watche (4).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat:2,
        id: 5,
        name: "Relex",
        price: 450.95,
        category: "Women's",
        image: "images/watche (5).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat:2,
        id: 6,
        name: "Curren",
        category: "Men's",
        price: 647.99,
        image: "images/watche (6).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat:3,
        id: 7,
        name: "Mini Focus",
        category: "Women's",
        price: 230.99,
        image: "images/watche (7).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat:3,
        id: 8,
        name: "Benyar",
        category: "Children's",
        price: 98.69,
        image: "images/watche (8).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat:3,
        id: 9,
        name: "Eagle teams",
        category: "Children's",
        price: 307.34,
        image: "images/watche (9).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat:3,
        id: 10,
        name: "Seashepherd",
        category: "Children's",
        price: 87.99,
        image: "images/watche (10).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat:3,
        id: 11,
        name: "Emporio Armani",
        category: "Children's",
        price: 411.99,
        image: "images/watche (11).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },{
        cat:3,
        id: 12,
        name: "Orient",
        category: "Children's",
        price: 98.69,
        image: "images/watche (12).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
];
// find this product
function showDetail() {
    let detail = document.querySelector('.detail');
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter((value) => {
        return value.id == productId
    })[0];
    // return to home page
    if (!thisProduct) {
        window.location.href = "/";
    }
    detail.innerHTML=`
       <div class="image">
       <img src="${thisProduct.image}"/>
       </div>
       <div class="content">
        <h1>${thisProduct.name}</h1>
        <div class="price">price :  ${thisProduct.price} $</div>
        <div class="description"><h3>Description</h3> ${thisProduct.description}</div>
        <div class="buttons">
        <a href="category.html" class="btn">check out</a>
        <div>
       </div>
    `;

    // add data product similar
    // show all product
    let listProduct=document.querySelector('.listProduct');
    (products.filter(value => value.id != productId))
        .forEach((product,key) => {
            let newProduct = document.createElement('div');
            newProduct.classList.add("item");
            newProduct.innerHTML = `
              <img src="${product.image}" />
              <div class="body">
              <h3>${product.name}</h3>
              <p>price : ${' $ ' + product.price}</p>
              <button  onclick="addToCard(${key})">Add To Card</button>
              <a href= ${'/detail.html?id=' + product.id}>show detail</a>
               </div> `;
                 listProduct.appendChild(newProduct);
        });
}
showDetail();
// add to cart
let listCards = [];

function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <img src="${value.image}"/>
                <div class="content">
                <h3>${value.name}</h3>
                <span>price  :  $ ${value.price.toLocaleString()}</span>
                <div class="quantity">
                <span>quantity :</span>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <span class="count">${value.quantity}</span>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button></div>
                </div>
                `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = 'total :  $ ' + totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}