// -------------------------Header----------------------------
const header = document.querySelector("header")
window.addEventListener("scroll",function(){
    x = window.pageYOffset
    // console.log(x)
    if(x > 0.0){
        header.classList.add("sticky")
    }else{
        header.classList.remove("sticky")
    }
})

// -------------------------Cartegory--------------------------
// const itemsliderbar = document.querySelectorAll("cartegory-left-li")
// itemsliderbar.forEach(function(menu,index){
//     menu.addEventListener("click",function(){
//         menu.classList.toggle("block") 
//     }) 
// })

const headerMenu = document.querySelector('.header__menu')
const overlay = document.querySelector('.overlay')
const headerMobileMenubar = document.querySelector('.header__mobile--menubar')
const body = document.querySelector('body')
const showMenu = () => {
    overlay.classList.toggle('show')
    headerMenu.classList.toggle('show')
    headerMobileMenubar.classList.toggle('show')
    body.classList.toggle('active')
}

const hideOverlay = () => {
    overlay.classList.remove('show')
    headerMenu.classList.remove('show')
    headerMobileMenubar.classList.remove('show')
    body.classList.remove('active')
}

const showSuccessSignUp = () => {
    const popupLogin = document.querySelector('.popup__login')
    popupLogin.classList.add('show')
    body.classList.add('active')
}

const showSize = () => {
    const popupSize = document.querySelector('.popup__size')
    popupSize.classList.add('show')
}

document.getElementById("container_size")?.addEventListener("click", function(event) {
    const popupSize = document.querySelector('.popup__size')
    if (event.target.id === "image_size") {
        event.stopPropagation();
    } else {
        popupSize.classList.remove('show')
    }
});

function checkEnter(event) {
    if (event.key === "Enter") {
        window.location.href = 'timkiem.html'
    }
}

function search() {
    window.location.href = 'timkiem.html'
}

let products = {
    data: [
        {
            id: 'ao11',
            name: 'Áo Thun Local Brand Unisex Cat On Animal Planet TS230',
            price1: '185.000đ',
            price2: '350.000đ',
            price: 185000,
            image: "./Images/ao11.png",
            soldOut: 'sold out'
        },
        {
            id: 'detail-product-1',
            name: 'Áo Polo Washed Localbrand Unisex Logo AP025',
            price1: '200.000đ',
            price2: '350.000đ',
            price: 200000,
            image: "./Images/detail-product-1.png"
        },
        {
            id: 'ao3',
            name: 'Áo Thun Local Brand Unisex Goose On Animal Planet TS 299',
            price1: '185.000đ',
            price2: '350.000đ',
            price: 99000,
            image: "./Images/new/a3.webp"
        },
        {
            id: 'ao4',
            name: 'Áo Sơ Mi Symbol Basic Logo SS047',
            price1: '195.000đ',
            price2: '350.000đ',
            price: 59000,
            image: "./Images/new/a4.webp"
        },
        {
            id: 'ao5',
            name: 'Áo Thun Local Brand Unisex Playvn TS342',
            price1: '179.000đ',
            price2: '259.000đ',
            price: 185000,
            image: "./Images/new/a5.webp"
        },
        {
            id: 'ao6',
            name: 'Áo Thun Crewz Unisex Local Brand TS039',
            price1: '125.000đ',
            price2: '200.000đ',
            price: 99000,
            image: "./Images/new/a6.jpeg"
        },
        {
            id: 'ao7',
            name: 'Áo Hoodie Local Brand Unisex " Mom’s favorite kido " Hoodie HD081',
            price1: '349.000đ',
            price2: '550.000đ',
            price: 59000,
            image: "./Images/new/a7.webp"
        },
        {
            id: 'ao8',
            name: 'Áo Hoodie Local Brand Unisex " TếtLàb " Sum họp Hoodie HD080',
            price1: '349.000đ',
            price2: '550.000đ',
            price: 185000,
            image: "./Images/new/a8.webp"
        },
        {
            id: 'ao9',
            name: 'Áo Hoodie Local Brand Unisex Thêu Logo Basic HD074',
            price1: '250.000đ',
            price2: '350.000đ',
            price: 99000,
            image: "./Images/new/a9.webp"
        },
        {
            id: 'ao10',
            name: 'Áo Thun Baby Tee Tducky BT007',
            price1: '160.000đ',
            price2: '250.000đ',
            price: 59000,
            image: "./Images/new/a10.webp"
        },
        {
            id: 'ao11',
            name: 'Áo Polo Washed Localbrand Unisex Logo AP025',
            price1: '159.000đ',
            price2: '280.000đ',
            price: 185000,
            image: "./Images/new/a11.webp"
        },
        {
            id: 'ao12',
            name: 'Áo Polo Washed Localbrand Unisex Logo AP026',
            price1: '157.000đ', 
            price2: '250.000đ',
            price: 185000,
            image: "./Images/new/a12.webp"
        }
    ]
}

for (let items of products.data){
    let card = document.createElement("a")
    if(!items.soldOut) {
        card.setAttribute("href", "./chitietsanpham.html");
    }
    card.classList.add("cartegory-right-content-item")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    card.appendChild(image)

    let name = document.createElement("h1");
    name.innerHTML = items.name;
    card.appendChild(name)

    let price_row = document.createElement("div")
    // price_row.classList.add("price")
    price_row.classList.add("row")
    price_row.classList.add("price")

    let price1 = document.createElement("div")
    price1.classList.add("price1")
    price1.innerHTML = items.price1
    price_row.appendChild(price1)

    let price2 = document.createElement("div")
    price2.classList.add("price2")
    price2.innerHTML = items.price2
    price_row.appendChild(price2)

    card.appendChild(price_row)

    let btn = document.createElement("button")
    btn.classList.add("add-cart")
    btn.setAttribute("onclick", "addToCart()")
    btn.innerHTML = "Thêm vào giỏ hàng"
    card.appendChild(btn)

    document.getElementById("products").appendChild(card);
    // console.log('da hien '+String(items))
}