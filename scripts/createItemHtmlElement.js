import {handleIncrease,handleDecrease,handleRemove} from './cartEventListenerFunctions.js';
// import * as fn from './cartEventListenerFunctions.js';
import {addToCart} from './homeEventListenerFunctions.js';


function createItemImage(src){
    let itemImage = document.createElement("img");
    itemImage.src = src;
    itemImage.className = "itemImage";
    return itemImage;
}

function createItemPrice(price){
    let itemPrice = document.createElement("p");
    itemPrice.innerHTML = "₹ " + price;
    itemPrice.className = "itemPrice";
    return itemPrice;
}

function createItemDiscription(name,color,size)
{
    let itemDiscription = document.createElement("div");
    itemDiscription.className = "itemDiscription";
    itemDiscription.appendChild(createItemName(name));
    itemDiscription.appendChild(document.createElement("br"));
    itemDiscription.appendChild(createItemColor(color));
    itemDiscription.appendChild(document.createElement("br"));
    itemDiscription.appendChild(createItemSize(size));
    return itemDiscription;
}

function createItemName(name){
    let itemName = document.createElement("p");
    itemName.innerHTML = name;
    itemName.className = "itemName";
    return itemName;
}

function createItemColor(color)
{
    let itemColor = document.createElement("text");
    itemColor.innerHTML = "Color : " + color;
    itemColor.className = "itemColor";
    return itemColor;
}

function createItemSize(size)
{
    let itemSize = document.createElement("text");
    itemSize.innerHTML = "Size : " + size;
    itemSize.className = "itemSize";
    return itemSize;
}

function createItemCounterContainer(id,pricePerItem)
{
    let itemCounterContainer = document.createElement("div");
    itemCounterContainer.className = "itemCounterContainer";
    itemCounterContainer.appendChild(createDecreaseButton(id,pricePerItem));
    itemCounterContainer.appendChild(createCounter(id,pricePerItem));
    itemCounterContainer.appendChild(createIncreaseButton(id,pricePerItem));
    return itemCounterContainer;
}

function createDecreaseButton(id,pricePerItem)
{
    let decreaseButton = document.createElement("button");
    decreaseButton.className = "counterButton";
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", handleDecrease.bind(event,id,pricePerItem));
    return decreaseButton;
}

function createIncreaseButton(id,pricePerItem)
{
    let increaseButton = document.createElement("button");
    increaseButton.className = "counterButton";
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", handleIncrease.bind(event,id,pricePerItem));
    setTimeout(() => increaseButton.click() ,0);
    return increaseButton;
}

function createCounter(id)
{
    let itemCounter = document.createElement("input");
    itemCounter.className = "itemCounter";
    itemCounter.id = "itemCounter" + id;
    itemCounter.setAttribute("type","number");
    itemCounter.setAttribute("value",0);
    itemCounter.disabled = true;

    return itemCounter;
}



function createItemPriceAndRemoveButtonContainer(id,pricePerItem)
{
    let itemPriceAndRemoveButtonContainer = document.createElement("div");
    itemPriceAndRemoveButtonContainer.className = "itemPriceAndRemoveButtonContainer";

    itemPriceAndRemoveButtonContainer.appendChild(craeteTotalAndPerItemPriceContainer(id,pricePerItem));
    itemPriceAndRemoveButtonContainer.appendChild(createRemoveButtonContainer(id));

    return itemPriceAndRemoveButtonContainer;
}

function craeteTotalAndPerItemPriceContainer(id,pricePerItem)
{
    let totalAndPerItemPriceContainer = document.createElement("div");
    totalAndPerItemPriceContainer.className = "totalAndPerItemPriceContainer";

    totalAndPerItemPriceContainer.appendChild(createTotalPrice(id))
    totalAndPerItemPriceContainer.appendChild(createPricePerItem(pricePerItem));

    return totalAndPerItemPriceContainer;
}

function createTotalPrice(id)
{
    let totalPrice = document.createElement("text");
    totalPrice.className = "totalPrice";
    totalPrice.textContent = "Total Price : ₹ ";
    
    let totalItemPrice = document.createElement("text");
    totalItemPrice.id = "totalItemPrice" + id;
    totalItemPrice.textContent = 0;

    totalPrice.appendChild(totalItemPrice);
    return totalPrice
}


function createPricePerItem(pricePerItem)
{
    let itemPrice = document.createElement("text");
    itemPrice.className = "itemPrice";
    itemPrice.textContent = "Price per item : ₹ " + pricePerItem;
    return itemPrice;
}

function createRemoveButtonContainer(id)
{
    let removeButtonContainer = document.createElement("div");
    removeButtonContainer.className = "removeButtonContainer";
    removeButtonContainer.appendChild(createRemoveButton(id));
    return removeButtonContainer;
}

function createRemoveButton(id)
{
    let removeButton = document.createElement("button");
    removeButton.className = "removeButton";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", handleRemove.bind(event,id));
    return removeButton;
}

function createAddToCartButton(data,itemArray,localStorageVariable){
    let addToCartButton = document.createElement("button");
    addToCartButton.innerHTML = "Add to cart";
    addToCartButton.className = "addToCartButton"
    addToCartButton.id = "addToCartButton" + data.id;
    addToCartButton.addEventListener("click", addToCart.bind(event,addToCartButton,data,itemArray,localStorageVariable));
    return addToCartButton;
}

function showEmptyCartDetails()
{
    const allItemContainer = document.getElementById("allItemContainer");

    allItemContainer.innerHTML =`
        <h2 class="emptyAllItemContainer">Cart is empty!!</h2>
        <h2 class="emptyAllItemContainer">Please add atleast 1 item in cart to proceed</h2>
    `;

    document.getElementById("cartItemCountAndCostContainer").style.display ="none";
}   

export {createItemImage,createItemDiscription,createItemCounterContainer,createItemPriceAndRemoveButtonContainer,createItemPrice,createItemName,createAddToCartButton,showEmptyCartDetails}