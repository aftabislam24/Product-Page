let productImg = document.querySelector(`.product-img`);
let products = document.querySelectorAll(`.products`);

for(prod of products){
    
    prod.addEventListener(`click`,(e)=>{
        productImg.src = e.target.src;
    })

}