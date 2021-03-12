function handleIncrease(id,pricePerItem)
{
    const counter = document.getElementById("itemCounter"+id);
    const totalPrice = document.getElementById("totalPrice"+id);

    const totalItem = document.getElementById("totalItem");
    const totalCost = document.getElementById("totalCost");

    let counterValue = parseInt(counter.value)
    counterValue = counterValue + 1;

    counter.value = counterValue;
    totalPrice.textContent = counterValue * pricePerItem;   
    totalItem.textContent = parseInt(totalItem.textContent) + 1;
    totalCost.textContent = parseInt(totalCost.textContent) + pricePerItem;
}


function handleDecrease(id,pricePerItem)
{
    const counter = document.getElementById("itemCounter"+id);
    const totalPrice = document.getElementById("totalPrice"+id);

    const totalItem = document.getElementById("totalItem");
    const totalCost = document.getElementById("totalCost");

    let counterValue = parseInt(counter.value)

    if(counterValue===1)
    {
        //count become 0, Remove item from cart
        handleRemove(id);
    }
    else
    {
        counterValue = counterValue - 1;

        counter.value = counterValue;
        totalPrice.textContent = counterValue * pricePerItem;

        totalItem.textContent = parseInt(totalItem.textContent) - 1;
        totalCost.textContent = parseInt(totalCost.textContent) - parseInt(pricePerItem);
    }
}


function handleRemove(id)
{ 
    const counter = document.getElementById("itemCounter"+id);
    const totalPrice = document.getElementById("totalPrice"+id);

    const totalItem = document.getElementById("totalItem");
    const totalCost = document.getElementById("totalCost");

    totalItem.textContent = parseInt(totalItem.textContent) - parseInt(counter.value);
    totalCost.textContent = parseInt(totalCost.textContent) - parseInt(totalPrice.textContent);
    
    counter.value = 0;
    totalPrice.textContent = 0;
    document.getElementById("itemContainer"+id).style.display = "none";   

    if(parseInt(totalItem.textContent) === 0)
    {
        const leftColumn = document.getElementById("leftColumn");

        leftColumn.innerHTML =`
            <h2 class="emptyLeftColumn">Cart is empty!!</h2>
            <h2 class="emptyLeftColumn">Please add atleast 1 item in cart to proceed</h2>
        `;

        document.getElementById("rightColumn").style.display ="none";
    }
}

