import {homeHeadingModel} from '../model/homeHeadingModel.js'
import {homeHeadingView} from '../view/homeHeadingView.js'

let homeHeadingController = {
    init : function(){
        homeHeadingView.init();
    },
    getCartIconSrc : function()
    {
        return homeHeadingModel.cartIconSrc;
    },
    navigateFromHomeToCart : function()
    {
        location= "./cart.html";
    }
}

export {homeHeadingController}