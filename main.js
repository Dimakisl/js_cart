let cart = {
    '8brt56': {
        'name': 'ship',
        'count': 1
    },
    '8brt58': {
        'name': 'helocopter',
        'count': 1
    },
};

//увеличение кол-ва товара
const plusFunction = (id) =>  {
    cart[id]['count'] ++;
    renderCart();
}

//уменьшение кол-ва товара
const minusFunction = (id) =>  {
    if(cart[id]['count'] - 1 == 0){
        deleteFunction(id);
        return true;
    }
    cart[id]['count'] --;
    renderCart();
}

//удаление товара
const deleteFunction = (id) =>  {
    delete cart[id]['count'] ;
    renderCart();
}

//вывод корзины
const renderCart = () => {
    console.log(cart)
}

document.onclick = (e) => {
    //console.log(e);
    if(e.target.classList.contains('plus')){
        plusFunction(e.target.dataset.id);
    }
    if(e.target.classList.contains('minus')){
        minusFunction(e.target.dataset.id);
    } 
}