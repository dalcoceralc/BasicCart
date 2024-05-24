let cart = [];
let total = 0;

function addCart(id,name,price){
	let product = cart.find(item => item.id === id);
	
	if (product) {
    product.quantity++;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
	
	showcart();
}

function showcart() {
  let contcart = document.getElementById('cont-cart');
  let totalcart = document.getElementById('total-cart');

  contcart.innerHTML = '';

  cart.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity} - S/ ${item.price * item.quantity}`;
    contcart.appendChild(li);
  });

  total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  totalcart.textContent = `S/ ${total}`;
}