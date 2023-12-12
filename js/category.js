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

let list = document.querySelector('.listProduct');
let listCard = document.querySelector('.box');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantityCart')

let products = [
    {
        id: 1,
        cat: 1,
        name: "Edifice Casio",
        price: 67.99,
        category: "Men's",
        image: "images/watche (9).jpg",
        description: " Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino"
    },
    {
        cat: 1,
        id: 2,
        category: "Men's",
        name: "Henters Race ",
        price: 180.99,
        image: "images/watche (2).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat: 1,
        id: 3,
        category: "Children's",
        name: "Omega",
        price: 95.49,
        image: "images/watche (3).jpg",
        description: " Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino"
    },
    {
        cat: 2,
        id: 4,
        category: "Women's",
        name: "Seiko",
        price: 69.99,
        image: "images/watche (4).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat: 2,
        id: 5,
        category: "Women's",
        name: "Relex",
        price: 89.99,
        image: "images/watche (5).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat: 2,
        id: 6,
        name: "Curren",
        category: "Men's",
        price: 221.99,
        image: "images/watche (6).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat: 3,
        id: 7,
        category: "Women's",
        name: "Mini Focus",
        price: 97.99,
        image: "images/watche (7).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat: 3,
        id: 8,
        category: "Children's",
        name: "Brenyar",
        price: 78.49,
        image: "images/watche (8).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat: 3,
        id: 9,
        category: "Children's",
        name: "Eagle teams",
        price: 77.99,
        image: "images/watche (9).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat: 3,
        id: 10,
        category: "Children's",
        name: "Seashepherd",
        price: 98.99,
        image: "images/watche (10).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat: 2,
        id: 11,
        category: "Children's",
        name: "Emporio Armani",
        price: 121.99,
        image: "images/watche (11).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
    {
        cat: 1,
        id: 12,
        category: "Children's",
        name: "Orient",
        price: 145.00,
        image: "images/watche (12).jpg",
        description: "Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino Fashion Men Black Stainless Steel Watch Luxury Calendar Quartz Wrist Watch Mens Business Watches for Man Clock Relogio Masculino "
    },
];
let listCards = [];
// add product to cart
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

const btns = [
    {
        cat: 1,
        name: "Men's"
    },
    {
        cat: 2,
        name: "Women's"
    },
    {
        cat: 3,
        name: "Children's"
    },
];

const filters = [...new Set(btns.map((btn) => {
    return btn
}))];
document.getElementById('category').innerHTML = filters.map((btn) => {
    var { name, cat } = btn;
    return (
        "<button class='btnCatgory' onclick='filterItems(" + (cat) + `)'>${name}</button>`
    );
}).join('');

const categories = [...new Set(products.map((item) => {
    return item
}))];
const filterItems = (a) => {
    const filterCatgories = categories.filter(item);
    function item(value) {
        if (value.cat == a) {
            return (
                value.cat
            )
        }
    }
    displayItem(filterCatgories);
}
const displayItem = (products) => {
    document.getElementById('product').innerHTML = products.map((product, key) => {

        return (
            `
            <div href= ${'/detail.html?id=' + product.id} class="box">
            <img src="${product.image}" >
            <div class="body">
            <h3 >${product.name}</h3>
            <p class="price"> price : $ ${product.price.toLocaleString()}</p>
            <button onclick="addToCard(${key})">Add To Card</button>
            <a href= ${'/detail.html?id=' + product.id}>show detail</a>
            </div>
            </div>
            `
        )
    }).join('');
}
displayItem(categories);



