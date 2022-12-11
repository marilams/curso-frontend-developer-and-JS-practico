const userEmail = document.querySelector('#navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu =document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.product-detail');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const cardContainer = document.querySelector('.cards-container');

function inactiveDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');

}

function inactiveMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartMenu.classList.add('inactive');
}

const shoppingCartBtn = () => {
    shoppingCartMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}


userEmail.addEventListener('click', inactiveDesktopMenu);
burguerMenu.addEventListener('click', inactiveMobileMenu);
shoppingCartIcon.addEventListener('click', shoppingCartBtn);

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Ball',
    price: 20,
    image: 'https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg',
})

productList.push({
    name: 'Pc',
    price: 120,
    image: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mini-pc-gigabyte-q270m-stx--pentium-dual-core-g4400-33ghz-0.jpg'
})


function productsView(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoDiv.append(productPrice, productName);
    
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardContainer.appendChild(productCard);
    
    }
}

productsView(productList);