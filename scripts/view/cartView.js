import {cartController} from '../controller/cartController.js'
import {cartItemController} from '../controller/cartItemController.js'

const cartView = {
    init : function(){
        this.allItemContainer = document.getElementById("allItemContainer");
        this.data = cartController.getProductData();
        this.render();
    },
    render : function(){
        if(this.data.length===0)
        {
            this.emptyCart();
        }
        this.data.forEach(data => { 
             this.allItemContainer.appendChild(cartItemController.init(data));
        });
    },
    emptyCart : function()
    {
        const container = document.getElementById("allItemContainer");

        this.emptyCartText = document.createElement("h1");
        this.emptyCartText.textContent = "Cart is empty!!"
        this.emptyCartText.className = "emptyCart";
        container.appendChild(this.emptyCartText);

        this.addOneItemText = document.createElement("h2");
        this.addOneItemText.textContent = "Please add atleast 1 item in cart to proceed"
        this.addOneItemText.className = "emptyCart";
        container.appendChild(this.addOneItemText);

        document.getElementById("cartTotalContainer").style.display = "none";
    }
};

export {cartView};