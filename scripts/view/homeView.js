import {homeController} from '../controller/homeController.js'
import {itemController} from '../controller/itemController.js'

const homeView = {
    init : function(){
        this.allItemContainer = document.getElementById("allItemContainer");
        this.data = homeController.getProductData();
        this.render();
    },
    render : function(){
        this.data.forEach(data => { 
             this.allItemContainer.appendChild(itemController.init(data));
        });
    }
};

export {homeView};