import {homeModel} from '../model/homeModel.js'
import {homeView} from '../view/homeView.js'
import {homeHeadingController} from '../controller/homeHeadingController.js'

let homeController ={
    init :function(){    
        homeHeadingController.init();    
        homeModel.init();
    },
    callView : function()
    {
        homeView.init();
    },
    getProductData : function()
    {
        return homeModel.productData;
    }
}

export {homeController};