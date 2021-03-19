import {createItemImage,createItemDiscription,createItemCounterContainer,createItemPriceAndRemoveButtonContainer,showEmptyCartDetails} from './createItemHtmlElement.js'

const localStorageVariable = "itemData";
var data = JSON.parse(localStorage.getItem(localStorageVariable));
showDataOnScreen(data);

function showDataOnScreen(data)
{
    const allItemContainer = document.getElementById("allItemContainer");

    if(data.length===0)
    {
        showEmptyCartDetails();
    }

    data.forEach(data => {
        allItemContainer.appendChild(createItemContainer(data));
    });
}

function createItemContainer(data)
{
    let itemContainer = document.createElement("div");
    itemContainer.className = "itemContainer";
    itemContainer.id = "itemContainer" + data.id;

    itemContainer.appendChild(createItemImage(data.image));
    itemContainer.appendChild(createItemDiscription(data.name,data.color,data.size));
    itemContainer.appendChild(createItemCounterContainer(data.id,data.pricePerItem));
    itemContainer.appendChild(createItemPriceAndRemoveButtonContainer(data.id,data.pricePerItem));

    return itemContainer;
}



// for(let i=0;i<data.length;i++)
//     {
//         allItemContainer.innerHTML += `
//             <div id="itemContainer${data[i].id}" class="itemContainer">
//                 <img class="itemImage" src="${data[i].image}" alt="${data[i].name} image">
//                 <div class="itemDescription">
//                     <p class="itemName">${data[i].name}</p>
//                     <br>
//                     <text class="itemColor">Color : ${data[i].color}</text>
//                     <br>
//                     <text class="itemSize">Size : ${data[i].size}</text>
//                 </div>
//                 <div class="itemCounterContainer">
//                     <button onClick="handleDecrease(${data[i].id},${data[i].pricePerItem})" class="counterButton">-</button>
//                     <input id="itemCounter${data[i].id}" class="itemCounter" type="number" value="0" disabled>
//                     <button onClick="handleIncrease(${data[i].id},${data[i].pricePerItem})" id="increaseButton${data[i].id}" class="counterButton">+</button>
//                 </div>

//                 <div class="itemPriceAndRemoveButtonContainer">
//                     <div class="totalAndPerItemPriceContainer">
//                         <text class="totalPrice">
//                             Total Price : <text>₹</text> 
//                             <text id="totalItemPrice${data[i].id}"> 0</text>
//                         </text>
//                         <text class="itemPrice">Price per item : ₹ ${data[i].pricePerItem}</text>
//                     </div>
//                     <div class="removeButtonContainer">
//                         <button onClick="handleRemove(${data[i].id})" class="removeButton">Remove</button>
//                     </div>
//                 </div>
//             </div>
//         `;

//         setTimeout(() => handleIncrease(data[i].id,data[i].pricePerItem),0);
//     }

