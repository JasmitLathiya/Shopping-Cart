import {constantValue} from '../registry.js'

const cartModel = {
    
        data : JSON.parse(localStorage.getItem(constantValue.localStorageVariable))
        // data : [
        //         {
        //             "id" : 1,
        //             "name" : "T-shirt",
        //             "color" : "Blue",
        //             "size" : "M",
        //             "pricePerItem" : 450,
        //             "image" : "./assets/tshirt.png"
        //         },
        //         {
        //             "id" : 2,
        //             "name" : "Jeans Pant",
        //             "color" : "Blue",
        //             "size" : "30",
        //             "pricePerItem" : 1500,
        //             "image" : "./assets/pant.png"
        //         },
        //         {
        //             "id" : 3,
        //             "name" : "Shoes",
        //             "color" : "Red",
        //             "size" : "10",
        //             "pricePerItem" : 2500,
        //             "image" : "./assets/shoes.png"
        //         }
        //     ]
    
}

export {cartModel}