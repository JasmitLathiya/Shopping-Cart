function navigateFromHomeToCart(){
    location= "./cart.html";
}

function addToCart(button,data,itemArray,localStorageVariable)
{ 
    button.classList.toggle("removeFromCartButton");
    if(button.textContent=== "Add to cart")
    {
        button.textContent = "Remove from cart";
        addItemInLocalStorage(data,itemArray,localStorageVariable);
    }
    else
    {
        button.textContent = "Add to cart";
        removeItemFromLocalStorage(data,itemArray,localStorageVariable);
    }
}

function addItemInLocalStorage(data,itemArray,localStorageVariable){
    itemArray.push(data);
    localStorage.setItem(localStorageVariable,JSON.stringify(itemArray));
}

function removeItemFromLocalStorage(data,itemArray,localStorageVariable){
    itemArray = itemArray.filter(array => array.id!=data.id);
    localStorage.setItem(localStorageVariable,JSON.stringify(itemArray));
}

export {navigateFromHomeToCart,addToCart};