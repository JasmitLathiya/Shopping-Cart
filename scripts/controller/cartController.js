import {cartView} from '../view/cartView.js'
import {cartModel} from '../model/cartModel.js'
import {cartTotalController} from '../controller/cartTotalController.js'

const cartController = {
    init : function()
    {
        cartTotalController.init();
        cartView.init();
    },
    getProductData : function(){
        return cartModel.data;
    }
}

export {cartController}