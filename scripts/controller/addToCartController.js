import {addToCartModel} from '../model/addToCartModel.js';
import {addToCartView} from '../view/addToCartView.js';
import {constantValue} from '../registry.js'

const addToCartConroller = {
    init : function(data)
    {
        addToCartModel.init(data);
        return addToCartView.init();
    },
    getItemData : function()
    {
        return addToCartModel.data;
    },
    addItemInLocalStorage : function(data){
        let dataArrayInLocalStorage = JSON.parse(localStorage.getItem(constantValue.localStorageVariable));
        dataArrayInLocalStorage.push(data);
        localStorage.setItem(constantValue.localStorageVariable,JSON.stringify(dataArrayInLocalStorage));
    },
    removeItemFromLocalStorage(data){
        let dataArrayInLocalStorage = JSON.parse(localStorage.getItem(constantValue.localStorageVariable));
        dataArrayInLocalStorage = dataArrayInLocalStorage.filter(arrayElement => arrayElement.id!==data.id);
        localStorage.setItem(constantValue.localStorageVariable,JSON.stringify(dataArrayInLocalStorage));
    }
}

export {addToCartConroller}