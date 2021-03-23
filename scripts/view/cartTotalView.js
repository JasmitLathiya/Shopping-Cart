import {cartTotalController} from '../controller/cartTotalController.js'

let cartTotalView = {
    init : function()
    {
        this.cartTotalContainer = document.getElementById("cartTotalContainer");
        this.render();
    },
    render : function()
    {
        this.cartTotalContainer.appendChild(this.createTotalItem());
        this.cartTotalContainer.appendChild(this.createTotalPrice());
        this.cartTotalContainer.appendChild(this.createProceedButton());
    },
    createTotalItem : function()
    {
        let totalItemContainer = document.createElement("div");
        totalItemContainer.className = "totalCartValueContainer";

        let totalItemText = document.createElement("text");
        totalItemText.className = "totalDescriptionText";
        totalItemText.textContent = "Total Items : ";
        totalItemContainer.appendChild(totalItemText);

        let totalCartItem = document.createElement("text");
        totalCartItem.className = "totalValue";
        totalCartItem.id = "totalCartItem";
        totalCartItem.textContent = 0;
        totalItemContainer.appendChild(totalCartItem);

        return totalItemContainer;
    },
    createTotalPrice : function()
    {
        let totalCostContainer = document.createElement("div");
        totalCostContainer.className = "totalCartValueContainer";

        let totalCostText = document.createElement("text");
        totalCostText.className = "totalDescriptionText";
        totalCostText.textContent = "Total Cost : ";
        totalCostContainer.appendChild(totalCostText);

        let totalCost = document.createElement("text");
        totalCost.className = "totalValue";
        totalCost.textContent = "₹";
        let cost = document.createElement("text");
        cost.id = "totalCartCost";
        cost.textContent = 0;
        totalCost.appendChild(cost);

        totalCostContainer.appendChild(totalCost);

        return totalCostContainer;
    },
    createProceedButton : function()
    {
        let proceedButtonContainer = document.createElement("div");
        proceedButtonContainer.className = "proceedButtonContainer";

        let btn = document.createElement("button");
        btn.textContent = "PROCEED TO PAY";
        btn.id = "proceedButton";

        proceedButtonContainer.appendChild(btn);

        return proceedButtonContainer;
    },
    
    
}

export {cartTotalView}