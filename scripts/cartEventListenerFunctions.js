import {showEmptyCartDetails} from './createItemHtmlElement.js';

function handleIncrease(id,pricePerItem)
{
    increaseItemCounter(id);
    increaseTotalItemPrice(id,pricePerItem);
    increaseTotalCartItem();
    increaseTotalCartCost(pricePerItem);
}

function handleDecrease(id,pricePerItem)
{
    const counterInt = parseInt(document.getElementById("itemCounter"+id).value);
    if(counterInt===1)
    {
        //count become 0, Remove item from cart
        handleRemove(id);
        return;
    }

    decreaseItemCounter(id);
    decreaseTotalItemPrice(id,pricePerItem);
    decreaseTotalCartItem();
    decreaseTotalCartCost(pricePerItem);
}

function handleRemove(id)
{
    removeTotalItemCountFromTotalCartItem(id);
    removeTotalItemCostFromTotalCartCost(id);
    setTotalItemPriceZero(id);
    setItemCountZero(id);
    document.getElementById("itemContainer"+id).style.display = "none";
    
    checkForEmptyItemContainer(id);
}

export {handleIncrease,handleDecrease,handleRemove}


//increase button functions
function increaseItemCounter(id)
{
    const counter = document.getElementById("itemCounter"+id);
    let counterInt = parseInt(counter.value);

    counterInt++;
    counter.value = counterInt;
}

function increaseTotalItemPrice(id,pricePerItem)
{
    const totalItemPrice = document.getElementById("totalItemPrice"+id);
    let totalItemPriceInt = parseInt(totalItemPrice.textContent);

    totalItemPriceInt += pricePerItem;
    totalItemPrice.textContent = totalItemPriceInt;
}

function increaseTotalCartItem()
{
    const totalCartItem = document.getElementById("totalCartItem");
    let totalCartItemInt = parseInt(totalCartItem.textContent);

    totalCartItemInt++;
    totalCartItem.textContent = totalCartItemInt;
}

function increaseTotalCartCost(pricePerItem)
{
    const totalCartCost = document.getElementById("totalCartCost");
    let totalCartCostInt = parseInt(totalCartCost.textContent);

    totalCartCostInt += pricePerItem;
    totalCartCost.textContent = totalCartCostInt;
}



//decrease button functions
function decreaseItemCounter(id)
{
    const counter = document.getElementById("itemCounter"+id);
    let counterInt = parseInt(counter.value);

    counterInt--;
    counter.value = counterInt;
}

function decreaseTotalItemPrice(id,pricePerItem)
{
    const totalItemPrice = document.getElementById("totalItemPrice"+id);
    let totalItemPriceInt = parseInt(totalItemPrice.textContent);
    
    totalItemPriceInt -= pricePerItem;
    totalItemPrice.textContent = totalItemPriceInt;
}

function decreaseTotalCartItem()
{
    const totalCartItem = document.getElementById("totalCartItem");
    let totalCartItemInt = parseInt(totalCartItem.textContent);
    
    totalCartItemInt--;
    totalCartItem.textContent = totalCartItemInt;
}

function decreaseTotalCartCost(pricePerItem)
{
    const totalCartCost = document.getElementById("totalCartCost");
    let totalCartCostInt = parseInt(totalCartCost.textContent);

    totalCartCostInt -= pricePerItem;
    totalCartCost.textContent = totalCartCostInt;
}



// Remove button functions
function setItemCountZero(id)
{
    const counter = document.getElementById("itemCounter"+id);
    counter.value=0;
}

function setTotalItemPriceZero(id)
{
    const totalItemPrice = document.getElementById("totalItemPrice"+id);
    totalItemPrice.textContent = 0;
}

function removeTotalItemCountFromTotalCartItem(id)
{
    const counterInt = parseInt(document.getElementById("itemCounter"+id).value);
    const totalCartItem = document.getElementById("totalCartItem");
    let totalCartItemInt = parseInt(totalCartItem.textContent);

    totalCartItemInt -= counterInt;
    totalCartItem.textContent = totalCartItemInt;
}

function removeTotalItemCostFromTotalCartCost(id)
{
    const totalCartCost = document.getElementById("totalCartCost");
    let totalCartCostInt = parseInt(totalCartCost.textContent);
    let totalItemPrice = parseInt(document.getElementById("totalItemPrice"+id).textContent);

    totalCartCostInt -= totalItemPrice;
    totalCartCost.textContent = totalCartCostInt;
}

function checkForEmptyItemContainer()
{
    const totalCartItemInt = parseInt(document.getElementById("totalCartItem").textContent);
    if(totalCartItemInt === 0)
    {
        showEmptyCartDetails();
    }
}
