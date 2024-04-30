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
            id: 'quan1',
            name: 'Quần Short Local Brand Unisex Melange PS076',
            price1: '185.000đ',
            price2: '350.000đ',
            price: 59000,
            image: "./Images/new/q1.webp"
        },
        {
            id: 'quan2',
            name: 'Quần Short Nỉ Local Brand Unisex Stitch Detail PS066',
            price1: '200.000đ',
            price2: '350.000đ',
            price: 185000,
            image: "./Images/new/q2.webp"
        },
        {
            id: 'quan3',
            name: 'Quần Short Lưới Local Brand Unisex Airism Texture PS067',
            price1: '185.000đ',
            price2: '350.000đ',
            price: 99000,
            image: "./Images/new/q3.webp"
        },
        {
            id: 'quan4',
            name: 'Quần Short Gió Local Brand Unisex Basic Logo PS065',
            price1: '195.000đ',
            price2: '350.000đ',
            price: 59000,
            image: "./Images/new/q4.webp"
        },
        {
            id: 'quan5',
            name: 'Quần Short Kaki Local Brand Unisex 2 Túi Hộp PS037',
            price1: '179.000đ',
            price2: '259.000đ',
            price: 185000,
            image: "./Images/new/q5.webp"
        },
        {
            id: 'quan6',
            name: 'Quần Short Kaki Local Brand Unisex Pocket Basic PS058',
            price1: '125.000đ',
            price2: '200.000đ',
            price: 99000,
            image: "./Images/new/q6.webp"
        },
        {
            id: 'quan7',
            name: 'Quần Short Dù Túi Hộp Local Brand Unisex Basic PS059',
            price1: '185.000đ',
            price2: '350.000đ',
            price: 59000,
            image: "./Images/new/q7.webp"
        },
        {
            id: 'quan8',
            name: 'Quần Short Unisex Kaki Túi Hộp 3 Màu Basic PS060',
            price1: '185.000đ',
            price2: '350.000đ',
            price: 185000,
            image: "./Images/new/q8.webp"
        },
        {
            id: 'quan9',
            name: 'Quần Jean Local Brand Unisex Basic Denim GP008',
            price1: '250.000đ',
            price2: '350.000đ',
            price: 99000,
            image: "./Images/new/q9.webp"
        },
        {
            id: 'quan10',
            name: 'Quần Jean Local Brand Unisex Ripped Wash GP010',
            price1: '250.000đ',
            price2: '350.000đ',
            price: 59000,
            image: "./Images/new/q10.webp"
        },
        {
            id: 'quan11',
            name: 'Quần Jean Local Brand Unisex Ripped Denim GP006',
            price1: '250.000đ',
            price2: '350.000đ',
            price: 185000,
            image: "./Images/new/q11.webp"
        },
        {
            id: 'quan12',
            name: 'Quần Nỉ Local Brand Unisex Worldwide Studio PS063',
            price1: '179.000đ',
            price2: '250.000đ',
            price: 99000,
            image: "./Images/new/q12.webp"
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


//--------------- Sản phẩm đề xuất
let products3 = {
    data: [
        {
            id: 'quan2',
            name: 'Quần Basic Short Màu Dark Green SP248',
            price1: '59.000đ',
            price2: '205.000đ',
            price: 59000,
            image: "./Images/quan2.webp"
        },
        {
            id: 'quan1',
            name: 'Quần Short Kaki Túi Hộp Màu Basic SP600',
            price1: '185.000đ',
            price2: '350.000đ',
            price: 185000,
            image: "./Images/quan1.webp"
        },
        {
            id: 'ao5',
            name: 'Áo Thun Local Brand Unisex Goose On Animal Planet TS 311',
            price1: '190.000đ',
            price2: '350.000đ',
            price: 190000,
            image: "./Images/ao5.jpeg"
        },
        {
            id: 'hd2',
            name: 'Áo Thun Local Brand Unisex Studies Tshirt TS232',
            price1: '150.000đ',
            price2: '300.000đ',
            price: 150000,
            image: "./Images/ao7.webp"
        }
    ]
}

for (let items of products3.data){
    let card = document.createElement("div")
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

    document.getElementById("product3").appendChild(card);
    // console.log('da hien '+String(items))
}