import {homeController} from '../controller/homeController.js'
import {constantValue} from '../registry.js'

const homeModel = {
    init : function() 
    {
        localStorage.setItem(constantValue.localStorageVariable,JSON.stringify([]));  //remove previous data from local storage

        fetch('./jsonData/productDetails.json')
        .then(response => response.json())
        .then(data => this.productData = data)
        .then(() => homeController.callView());
    }
}

export {homeModel}
