var itemList = [];
var itemPrice = [];




function setItem(item, price){
  itemList.push(item);
  itemPrice.push(price);
  console.log(itemList);
  console.log(itemPrice);

}

function addPrices(itemPrice){
  var total = 0;
  for(i = 0; i < itemPrice.length; i++){
    total = total + itemPrice[i];
  }
console.log(total);
  document.getElementById("result").innerHTML = total;
}
