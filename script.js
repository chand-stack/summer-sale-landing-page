let total = 0;
function clickItem(target){
    const productList = document.getElementById('product-list');
    const newLi = document.createElement('li');
    newLi.innerText = target.childNodes[3].childNodes[3].innerText;
    productList.appendChild(newLi);

const productPrice =

console.log(target.childNodes[3].childNodes[5].innerText.split(' ')[0])
}