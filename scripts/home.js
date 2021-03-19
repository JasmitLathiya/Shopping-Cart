var items= [];
localStorage.setItem("itemData",JSON.stringify(items));     //remove previous data in local storage

document.getElementById("cartIcon").addEventListener("click", navigateFromHomeToCart);

function navigateFromHomeToCart(){
    location= "./cart.html";
}


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
    itemContainer.appendChild(createAddToCartButton(data));

    return itemContainer;
}



function createItemImage(src){
    let itemImage = document.createElement("IMG");
    itemImage.src = src;
    itemImage.className = "itemImage";
    return itemImage;
}

function createItemName(name){
    let productName = document.createElement("P");
    productName.innerHTML = name;
    productName.className = "itemName";
    return productName;
}

function createItemPrice(price){
    let itemPrice = document.createElement("P");
    itemPrice.innerHTML = "₹ " + price;
    itemPrice.className = "itemPrice";
    return itemPrice;
}

function createAddToCartButton(data){
    let addToCartButton = document.createElement("button");
    addToCartButton.innerHTML = "Add to cart";
    addToCartButton.className = "addToCartButton"
    addToCartButton.id = "addToCartButton" + data.id;

    addToCartButton.addEventListener("click", function(){ 
        addToCartButton.classList.toggle("removeFromCartButton");
        if(addToCartButton.textContent=== "Add to cart")
        {
            addToCartButton.textContent = "Remove from cart";
            addItemInLocalStorage(items,data);
        }
        else
        {
            addToCartButton.textContent = "Add to cart";
            removeItemFromLocalStorage(data);
        }
    });

    return addToCartButton;
}



function addItemInLocalStorage(items,data){
    items.push(data);
    localStorage.setItem("itemData",JSON.stringify(items));
}

function removeItemFromLocalStorage(data){
    items = items.filter(ar => ar!=data);
    localStorage.setItem("itemData",JSON.stringify(items));
}