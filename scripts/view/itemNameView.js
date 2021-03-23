import {itemNameController} from '../controller/itemNameController.js'

let itemNameView = {
    init : function(){
        return this.render();
    },
    render : function()
    {
        this.itemName = document.createElement("p");
        this.itemName.innerHTML = itemNameController.getItemName();
        this.itemName.className = "itemName";
        return this.itemName;
    }
}

export {itemNameView};