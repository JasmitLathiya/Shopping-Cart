import {cartTotalModel} from '../model/cartTotalmodel.js'
import {cartTotalView} from '../view/cartTotalView.js'

const cartTotalController = {
    init : function()
    {
        cartTotalView.init();
    }
}

export {cartTotalController}