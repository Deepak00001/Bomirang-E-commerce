var product_amount = document.getElementById('product_amount');
var shipping_charge = document.getElementById('shipping_charge');
var totalamt = document.getElementById('totalamt');
/**********************************add**********************************/

function add() {
    document.getElementById('add').style.display = "block";
}
/************************************************first************************ */
function decreaseNumone() {
    var itemval = document.getElementById('textbox');
    var itemprice = document.getElementById('price');
    if(itemval.value <=0){
        itemval.value =0;
    }
    else{
        itemval.value = parseInt(itemval.value) -1;
        itemval.style.background = 'white';
        itemval.style.color = 'black';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 1499;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) - 1499;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
function increaseNumone() {
    var itemval = document.getElementById('textbox');
    var itemprice = document.getElementById('price');
    if(itemval.value >=5){
        itemval.value =5;
        alert("maximum 5 allowed")
        itemval.style.background = 'red';
        itemval.style.color = 'white'
    }
    else{
        itemval.value = parseInt(itemval.value) +1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 1499;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) + 1499;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

/********************************second********************************/

function decreaseNumtwo() {
    var itemval = document.getElementById('textboxtwo');
    var itemprice = document.getElementById('pricetwo');
    if(itemval.value <=0){
        itemval.value =0;
    }
    else{
        itemval.value = parseInt(itemval.value) -1;
        itemval.style.background = 'white';
        itemval.style.color = 'black';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 999;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) - 999;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
function increaseNumtwo() {
    var itemval = document.getElementById('textboxtwo');
    var itemprice = document.getElementById('pricetwo');
    if(itemval.value >=5){
        itemval.value =5;
        alert("maximum 5 allowed")
        itemval.style.background = 'red';
        itemval.style.color = 'white'
    }
    else{
        itemval.value = parseInt(itemval.value) +1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 999;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) + 999;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

/**************************************three************************************/

function decreaseNumthree() {
    var itemval = document.getElementById('textboxthree');
    var itemprice = document.getElementById('pricethree');
    if(itemval.value <=0){
        itemval.value =0;
    }
    else{
        itemval.value = parseInt(itemval.value) -1;
        itemval.style.background = 'white';
        itemval.style.color = 'black';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 1199;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) -1199;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
function increaseNumthree() {
    var itemval = document.getElementById('textboxthree');
    var itemprice = document.getElementById('pricethree');
    if(itemval.value >=5){
        itemval.value =5;
        alert("maximum 5 allowed")
        itemval.style.background = 'red';
        itemval.style.color = 'white'
    }
    else{
        itemval.value = parseInt(itemval.value) +1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 1199;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) + 1199;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

/************************************Fourth********************************/

function decreaseNumfour() {
    var itemval = document.getElementById('textboxfour');
    var itemprice = document.getElementById('pricefour');
    if(itemval.value <=0){
        itemval.value =0;
    }
    else{
        itemval.value = parseInt(itemval.value) -1;
        itemval.style.background = 'white';
        itemval.style.color = 'black';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 599;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) -599;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
function increaseNumfour() {
    var itemval = document.getElementById('textboxfour');
    var itemprice = document.getElementById('pricefour');
    if(itemval.value >=5){
        itemval.value =5;
        alert("maximum 5 allowed")
        itemval.style.background = 'red';
        itemval.style.color = 'white'
    }
    else{
        itemval.value = parseInt(itemval.value) +1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 599;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) + 599;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

/**************************************fifth*********************************/

function decreaseNumfive() {
    var itemval = document.getElementById('textboxfive');
    var itemprice = document.getElementById('pricefive');
    if(itemval.value <=0){
        itemval.value =0;
    }
    else{
        itemval.value = parseInt(itemval.value) -1;
        itemval.style.background = 'white';
        itemval.style.color = 'black';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 499;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) -499;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
function increaseNumfive() {
    var itemval = document.getElementById('textboxfive');
    var itemprice = document.getElementById('pricefive');
    if(itemval.value >=5){
        itemval.value =5;
        alert("maximum 5 allowed")
        itemval.style.background = 'red';
        itemval.style.color = 'white'
    }
    else{
        itemval.value = parseInt(itemval.value) +1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 499;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) +499;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

/*****************************************sixth************************************/

function decreaseNumsix() {
    var itemval = document.getElementById('textboxsix');
    var itemprice = document.getElementById('pricesix');
    if(itemval.value <=0){
        itemval.value =0;
    }
    else{
        itemval.value = parseInt(itemval.value) -1;
        itemval.style.background = 'white';
        itemval.style.color = 'black';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 1399;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) -1399;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
function increaseNumsix() {
    var itemval = document.getElementById('textboxsix');
    var itemprice = document.getElementById('pricesix');
    if(itemval.value >=5){
        itemval.value =5;
        alert("maximum 5 allowed")
        itemval.style.background = 'red';
        itemval.style.color = 'white'
    }
    else{
        itemval.value = parseInt(itemval.value) +1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 1399;
        product_amount.innerHTML = parseInt(product_amount.innerHTML) + 1399;
        totalamt.innerHTML = parseInt(product_amount.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}