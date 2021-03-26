import {cartItemModel} from '../model/cartItemModel.js'
import {cartItemView} from '../view/cartItemView.js'

const cartItemController = {
    init : function(data)
    {
        cartItemModel.init(data);
        return cartItemView.init();
    },
    getData: function()
    {
        return cartItemModel.data;
    }
}

export {cartItemController}