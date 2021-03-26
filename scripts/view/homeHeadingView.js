import {homeHeadingController} from '../controller/homeHeadingController.js'

const homeHeadingView = {
    init : function()
    {
        this.cartIconSrc = homeHeadingController.getCartIconSrc();
        this.temp = document.getElementById("heading");
        this.render();
    },
    render : function()
    {
        this.shoppingCartText = document.createElement("h1");
        this.shoppingCartText.textContent = "Shopping Cart";
        this.temp.appendChild(this.shoppingCartText);

        this.cartIcon = document.createElement("img");
        this.cartIcon.src = this.cartIconSrc;
        this.cartIcon.className = "icon";
        this.cartIcon.id = "cartIcon";
        this.cartIcon.addEventListener("click",homeHeadingController.navigateFromHomeToCart);
        this.temp.appendChild(this.cartIcon);
    }
}

export {homeHeadingView}