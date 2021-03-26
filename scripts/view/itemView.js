import {addToCartConroller} from '../controller/addToCartController.js'
import {itemController} from '../controller/itemController.js'

const itemView = {
    init : function(){
        this.data=itemController.getData();
        return this.render();
    },
    render : function(){
        this.itemContainer = document.createElement("div");
        this.itemContainer.className="itemContainer";
        this.itemContainer.appendChild(this.createItemImage(this.data.image));
        this.itemContainer.appendChild(this.createItemName(this.data.name));
        this.itemContainer.appendChild(this.createItemPrice(this.data.pricePerItem))
        this.itemContainer.appendChild(addToCartConroller.init(this.data));
        return this.itemContainer;
    },
    createItemImage : function(imageSrc)
    {
        this.itemImage = document.createElement("img");
        this.itemImage.className = "itemImage";
        this.itemImage.src = imageSrc;
        return this.itemImage;
    },
    createItemName : function(name)
    {
        this.itemName = document.createElement("p");
        this.itemName.innerHTML = name;
        this.itemName.className = "itemName";
        return this.itemName;
    },
    createItemPrice : function(price)
    {
        this.itemPrice = document.createElement("p");
        this.itemPrice.innerHTML = "₹ " + price;
        this.itemPrice.className = "itemPrice";
        return this.itemPrice;
    }
}

export {itemView};