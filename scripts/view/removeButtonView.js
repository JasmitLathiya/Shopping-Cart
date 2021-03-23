import {removeButtonController} from '../controller/removeButtonController.js'

let removeButtonView = {
    init : function()
    {
        this.id = removeButtonController.getId();
        return this.render();
    },
    render : function()
    {
        this.removeButtonContainer = document.createElement("div");
        this.removeButtonContainer.className = "removeButtonContainer";

        this.removeButton = document.createElement("button");
        this.removeButton.className = "removeButton";
        this.removeButton.textContent = "Remove";
        this.removeButton.addEventListener("click", removeButtonController.handleRemove.bind(event,this.id));
        
        this.removeButtonContainer.appendChild(this.removeButton);

        return this.removeButtonContainer;
    },
    setTotalItem : function(totalItem)
    {
        const totalCartItem = document.getElementById("totalCartItem");
        totalCartItem.textContent = totalItem;
        if(totalItem===0)
        {
            this.emptyCart();
        }
    },
    setTotalCartCost : function(totalCost)
    {
        const totalCartCost = document.getElementById("totalCartCost");
        totalCartCost.textContent = totalCost;
    },
    hideItem : function(id)
    {
        document.getElementById("itemContainer"+id).style.display = "none";
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
}

export {removeButtonView}