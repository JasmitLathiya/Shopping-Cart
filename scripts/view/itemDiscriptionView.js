import {itemDiscriptionController} from '../controller/itemDiscriptionController.js'

let itemDiscriptionView = {
    init : function(){
        this.data = itemDiscriptionController.getDiscriptionData();
        return this.render();
    },
    render : function()
    {
        this.itemDiscription = document.createElement("div");
        this.itemDiscription.className = "itemDiscription";
        this.itemDiscription.appendChild(this.createItemName(this.data.name));
        this.itemDiscription.appendChild(document.createElement("br"));
        this.itemDiscription.appendChild(this.createItemColor(this.data.color));
        this.itemDiscription.appendChild(document.createElement("br"));
        this.itemDiscription.appendChild(this.createItemSize(this.data.size));
        return this.itemDiscription;
    },
    createItemName : function(name){
        let itemName = document.createElement("p");
        itemName.innerHTML = name;
        itemName.className = "itemName";
        return itemName;
    },
    createItemColor : function(color){
        let itemColor = document.createElement("text");
        itemColor.innerHTML = "Color : " + color;
        itemColor.className = "itemColor";
        return itemColor;
    },
    createItemSize : function(size)
    {
        let itemSize = document.createElement("text");
        itemSize.innerHTML = "Size : " + size;
        itemSize.className = "itemSize";
        return itemSize;
    },
}

export {itemDiscriptionView}