import {createItemImage,createItemName,createItemPrice,createAddToCartButton} from './createItemHtmlElement.js'
import {navigateFromHomeToCart} from './homeEventListenerFunctions.js';

let itemArray= [];
const localStorageVariable = "itemData";
localStorage.setItem(localStorageVariable,JSON.stringify(itemArray));     //remove previous data in local storage

document.getElementById("cartIcon").addEventListener("click", navigateFromHomeToCart);


(function fetchProductData() {
    fetch('./jsonData/productDetails.json')
           .then(response => response.json())
           .then(data => showDataOnHomeScreen(data));
})();

function showDataOnHomeScreen(data)
{
    const allItemContainer = document.getElementById("allItemContainer");

    data.forEach(data => {
        allItemContainer.appendChild(createItemContainer(data));
    });
}



function createItemContainer(data){
    let itemContainer = document.createElement("div");
    itemContainer.className="itemContainer";
    
    itemContainer.appendChild(createItemImage(data.image));
    itemContainer.appendChild(createItemName(data.name));
    itemContainer.appendChild(createItemPrice(data.pricePerItem))
    itemContainer.appendChild(createAddToCartButton(data,itemArray,localStorageVariable));

    return itemContainer;
}


// function createAddToCartButton(data){
//     let addToCartButton = document.createElement("button");
//     addToCartButton.innerHTML = "Add to cart";
//     addToCartButton.className = "addToCartButton"
//     addToCartButton.id = "addToCartButton" + data.id;
//     addToCartButton.addEventListener("click", addToCart);
//     return addToCartButton;
// }


// function addItemInLocalStorage(items,data){
//     items.push(data);
//     localStorage.setItem(localStorageVariable,JSON.stringify(items));
// }

// function removeItemFromLocalStorage(data){
//     items = items.filter(array => array.id!=data.id);
//     localStorage.setItem(localStorageVariable,JSON.stringify(items));
// }
