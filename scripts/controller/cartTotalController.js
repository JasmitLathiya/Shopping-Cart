import {cartTotalModel} from '../model/cartTotalmodel.js'
import {cartTotalView} from '../view/cartTotalView.js'

let cartTotalController = {
    init : function()
    {
        cartTotalView.init();
    }
}

export {cartTotalController}