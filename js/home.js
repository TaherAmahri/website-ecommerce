// --- home page ----
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    shoopCart.classList.remove('active');
}

let navList = document.querySelectorAll("nav a");
navList.forEach((a) => {
    a.addEventListener("click", (e) => {
        navList.forEach((a) => {
            a.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    })
})

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

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;
function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
// end home page

// shopping cart
let list = document.querySelector('.box-container');
let listCard = document.querySelector('.box');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantityCart')

let products = [
    {  
        id:1,    
        name: "Edifice Casio",
        price: 120.49,
        image: "images/watche (1).jpg",
        description: " Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino"
    },
    {  
        id:2,    
        name: "Henters Race ",
        price: 180.99,
        image: "images/watche (2).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        id:3,    
        name: "Omega",
        price: 95.49,
        image: "images/watche (3).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        id: 4,
        name: "Seiko",
        price: 117.99,
        image: "images/watche (4).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        id: 5,
        name: "Relex",
        price: 58.99,
        image: "images/watche (5).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        id: 6,
        name: "Curren",
        price: 87.99,
        image: "images/watche (6).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        id: 7,
        name: "Mini Focus",
        price: 67.99,
        image: "images/watche (7).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        id: 8,
        name: "Brenyar",
        price: 90.78,
        image: "images/watche (8).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        id: 9,
        name: "Eagle teams",
        price: 85.49,
        image: "images/watche (9).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    }
];
let listCards = [];

function initApp() {
    products.forEach((product, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.innerHTML = `
            <img src="${product.image}" >
            <div class="body">
            <h3 class="title">${product.name}</h3>
            <p class="price"> price : $ ${product.price.toLocaleString()}</p>
            <div class="buttons">
            <button  onclick="addToCard(${key})">Add To Card</button>
            <a href= ${'/detail.html?id=' + product.id}>show detail</a>
            </div>
            </div>
            `;
        list.appendChild(newDiv);
    });
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
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
    });
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
