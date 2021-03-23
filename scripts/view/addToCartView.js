import {addToCartConroller} from '../controller/addToCartController.js';

let addToCartView = {
    init : function(){
        this.data = addToCartConroller.getItemData();
        return this.render();
    },
    render : function(){
        this.addToCartButton = document.createElement("button");
        this.addToCartButton.textContent = "Add to cart";
        this.addToCartButton.className = "addToCartButton"
        this.addToCartButton.id = "addToCartButton" + this.data.id;
        this.addToCartButton.addEventListener("click",this.changeButtonView.bind(event,this.addToCartButton,this.data));
        return this.addToCartButton;
    },
    changeButtonView : function(btn,data)
    {
        btn.classList.toggle("removeFromCartButton");
        if(btn.textContent=== "Add to cart")
        {
            btn.textContent = "Remove from cart";
            addToCartConroller.addItemInLocalStorage(data);
        }
        else
        {
            btn.textContent = "Add to cart";
            addToCartConroller.removeItemFromLocalStorage(data);
        }
    }
}

export {addToCartView}