
const cart=JSON.parse(localStorage.getItem('cart')||'[]');
document.getElementById('cart').innerHTML=cart.map((p,i)=>`<div class='card'><h3>${p.name}</h3><p>$${p.price}</p></div>`).join('');
document.getElementById('total').textContent='Total: $'+cart.reduce((a,b)=>a+b.price,0).toFixed(2);
