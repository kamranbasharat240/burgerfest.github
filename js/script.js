const menuItems = [
  {cat:'beef', group:'Beef', name:'Beef Slave', price:'Rs780'},
  {cat:'beef', group:'Beef', name:'Beef Mushroom', price:'Rs800'},
  {cat:'beef', group:'Beef', name:'Beef Jalapeno', price:'Rs800'},
  {cat:'beef', group:'Beef', name:'Cheese Bomb', price:'Rs1,100'},
  {cat:'beef', group:'Beef', name:'The Beast', price:'Rs950'},
  {cat:'beef', group:'Beef', name:'Flesco Beef', price:'Rs950'},
  {cat:'beef', group:'Beef', name:'Beef Bin Da', price:'Rs1,100'},
  {cat:'beef', group:'Beef', name:'Rock Star Fish', price:'Rs1,500'},
  {cat:'beef', group:'Beef', name:'The Volcano Mutton', price:'Rs1,500'},
  {cat:'beef', group:'Beef Lover', name:'BBQ Aroma', desc:'Large beef patty with BBQ sauce', price:null},
  {cat:'beef', group:'Beef Lover', name:'Beef Divine', desc:'Jalapeno beef burger', price:null},
  {cat:'beef', group:'Beef Lover', name:'Beef Monster', desc:'Double beef patty with double cheese', price:null},
  {cat:'beef', group:'Beef Lover', name:'3B Special', desc:'Double beef patty with stuffed cheese patty', price:null},
  {cat:'chicken', group:'Chicken', name:'Chicken Jalapeno', price:'Rs750'},
  {cat:'chicken', group:'Chicken', name:'Chicken Tron — Pirates Of The Caribbean', price:'Rs900'},
  {cat:'chicken', group:'Chicken', name:'Chicken Gypsy', price:'Rs900'},
  {cat:'chicken', group:'Chicken', name:'Wild Big Ben', price:'Rs900'},
  {cat:'chicken', group:'Chicken', name:'Chicken Binda', price:'Rs1,100'},
  {cat:'chicken', group:'Chicken Lover', name:'Classic', desc:'Grilled chicken breast with tangy sauce', price:null},
  {cat:'chicken', group:'Chicken Lover', name:'Jalapeno Lover', desc:'Jalapeno grilled chicken breast with spicy sauce', price:null},
  {cat:'chicken', group:'Chicken Lover', name:'Burgerzilla', desc:'Double chicken filled with creamy sauce', price:null},
  {cat:'chicken', group:'Chicken Lover', name:'Massive Hot Rock', desc:'Double grilled chicken filled with spicy sauce', price:null},
  {cat:'chicken', group:'Tutu Burger', name:'Tutu Chicken', price:null},
  {cat:'beef', group:'Tutu Burger', name:'Tutu Beef', price:null},
  {cat:'chicken', group:'Tutu Burger', name:'Tutu Zinger', price:null},
  {cat:'steaks', group:'Chicken Steaks', name:'Jalapeno Spicy Steak', price:'Rs1,750'},
  {cat:'steaks', group:'Chicken Steaks', name:'White Creamy Steak', price:'Rs1,850'},
  {cat:'steaks', group:'Chicken Steaks', name:'Marocan Steak', price:'Rs1,750'},
  {cat:'steaks', group:'Chicken Steaks', name:'Mexican Steak', price:'Rs1,850'},
  {cat:'sides', group:'Fries', name:'Plain Fries', price:'Rs450'},
  {cat:'sides', group:'Fries', name:'Garlic Mayo Fries', price:'Rs550'},
  {cat:'sides', group:'Fries', name:'Fries Bucket', price:'Rs750'},
  {cat:'sides', group:'Wings', name:'Smokin Wings', desc:'6 pcs Rs450 · 12 pcs Rs850', price:'Rs450'},
  {cat:'sides', group:'Wings', name:'Crispy Wings', desc:'6 pcs Rs450 · 12 pcs Rs850', price:'Rs450'},
  {cat:'sides', group:'Nuggets', name:'Nuggets', desc:'6 pcs Rs300 · 12 pcs Rs550', price:'Rs300'},
  {cat:'sides', group:'Pasta', name:'Alfredo Pasta', price:'Rs650'},
  {cat:'sides', group:'Wraps', name:'Loaded Grill Wrap', price:null},
  {cat:'sides', group:'Wraps', name:'Loaded Grill Wrap Combo', price:null},
  {cat:'drinks', group:'Margaritas', name:'Margaritas', desc:'Mint, apple, peach, lemon, mango, guava', price:'Rs250'},
  {cat:'drinks', group:'Shakes', name:'Shakes', desc:'Mango, chocolate, strawberry, Oreo', price:'Rs400'},
  {cat:'drinks', group:'Smoothies', name:'Smoothies', desc:'Mix fruit, yop, strawberry', price:'Rs400'},
  {cat:'drinks', group:'Special', name:'Jack Special', desc:'Ice cream & yop, strawberry & swataw, pinacolada & kole, peach iced tea & pomegranate', price:'Rs850'},
  {cat:'drinks', group:'Fresh Juices', name:'Fresh Juices', desc:'Apple, grapefruit, peach, orange, pomegranate', price:'Rs550'},
  {cat:'drinks', group:'Beverages', name:'Soft Drink', price:'Rs140'},
  {cat:'drinks', group:'Beverages', name:'Water', price:'Rs80'}
];

const grid=document.querySelector('#menuGrid');
const tabs=document.querySelectorAll('.menu-tabs button');
function render(filter='all'){
  const list=filter==='all'?menuItems:menuItems.filter(x=>x.cat===filter);
  grid.innerHTML=list.map(x=>`<article class="menu-card"><span class="cat">${x.group}</span><h3>${x.name}</h3>${x.desc?`<p>${x.desc}</p>`:''}<div class="price ${x.price?'':'muted'}">${x.price||'Price not provided'}</div></article>`).join('');
}
tabs.forEach(btn=>btn.addEventListener('click',()=>{tabs.forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter)}));
render();

const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));

document.querySelector('#year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
