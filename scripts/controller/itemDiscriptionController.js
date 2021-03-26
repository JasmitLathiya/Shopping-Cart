import {itemDiscriptionModel} from '../model/itemDiscriptionModel.js'
import {itemDiscriptionView} from "../view/itemDiscriptionView.js";

const itemDiscriptionController = {
    init : function(name,color,size){
        itemDiscriptionModel.init(name,color,size);
        return itemDiscriptionView.init();
    },
    getDiscriptionData : function(){
        return itemDiscriptionModel.data;
    },
}

export {itemDiscriptionController}