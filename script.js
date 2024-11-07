document.getElementById("orderbutton").onclick = function () {
    let foodPrice = parseInt(document.getElementById("food").value);
    let DrinkPrice = parseInt(document.getElementById("Drink").value);

    let totalPrice = foodPrice + DrinkPrice
    let discount = 0;

    if (totalPrice > 30){
    alert('ok')}
}
