(function fetchProductData() {
     fetch('./jsonData/productDetails.json')
            .then(response => response.json())
            .then(data => showDataOnScreen(data));
})();

function showDataOnScreen(data)
{
    const productDetailsContainer = document.getElementById("productDetailsContainer");

    for(let i=0;i<data.length;i++)
    {
        productDetailsContainer.innerHTML += `
            <div id="itemContainer${data[i].id}" class="itemContainer">
                <img class="itemImage" src="${data[i].image}" alt="${data[i].name} image">
                <div class="itemDescription">
                    <p class="itemName">${data[i].name}</p>
                    <br>
                    <text class="itemColor">Color : ${data[i].color}</text>
                    <br>
                    <text class="itemSize">Size : ${data[i].size}</text>
                </div>
                <div class="itemCounterContainer">
                    <button onClick="handleDecrease(${data[i].id},${data[i].pricePerItem})" class="counterButton">-</button>
                    <input id="itemCounter${data[i].id}" class="itemCounter" type="number" value="1" disabled>
                    <button onClick="handleIncrease(${data[i].id},${data[i].pricePerItem})" class="counterButton">+</button>
                </div>
                <div class="itemPriceAndRemoveButtonContainer">
                    <div class="totalAndPerItemPriceContainer">
                        <text class="totalPrice">
                            Total Price : <text>₹</text> 
                            <text id="totalItemPrice${data[i].id}"> ${data[i].pricePerItem}</text>
                        </text>
                        <text class="itemPrice">Price per item : ₹ ${data[i].pricePerItem}</text>
                    </div>
                    <div class="removeButtonContainer">
                        <button onClick="handleRemove(${data[i].id})" class="removeButton">Remove</button>
                    </div>
                </div>
            </div>
        `;

        // handleIncrease(data[i].id,data[i].pricePerItem);
        increaseTotalCartItem();
        increaseTotalCartCost(data[i].pricePerItem);
    }
}


