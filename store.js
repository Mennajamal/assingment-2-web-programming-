const products=[{"name": "Paracetamol", "price": 4.99}, {"name": "Ibuprofen", "price": 6.49}, {"name": "Vitamin C", "price": 8.99}, {"name": "Cough Syrup", "price": 7.99}, {"name": "Allergy Relief", "price": 12.99}, {"name": "First Aid Kit", "price": 19.99}, {"name": "Multivitamins", "price": 14.99}, {"name": "Omega 3", "price": 11.99}];
function addToCart(i){let c=JSON.parse(localStorage.getItem('cart')||'[]');c.push(i);localStorage.setItem('cart',JSON.stringify(c));alert('Added to cart');}
const box=document.getElementById('products');
function render(list){if(!box)return;box.innerHTML=list.map(p=>`<div class='card'><img src='https://via.placeholder.com/200x120?text=${encodeURIComponent(p.name)}'><h3>${p.name}</h3><p>$${p.price}</p><button onclick='addToCart(${JSON.stringify(p)})'>Add To Cart</button></div>`).join('');}
render(products);
const s=document.getElementById('search'); if(s){s.oninput=()=>render(products.filter(p=>p.name.toLowerCase().includes(s.value.toLowerCase())));}
