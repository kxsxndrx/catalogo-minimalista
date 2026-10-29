const products = [
  {
    id: 1,
    name: "Lámpara de Mesa Arco",
    category: "Iluminación",
    price: 89.00,
    tag: "Nuevo",
    image: "https://tse4.mm.bing.net/th/id/OIP.Ogk3xw6yKWjRJw4zAfXQaQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    name: "Reloj Minimal de Pared",
    category: "Decoración",
    price: 45.00,
    tag: "Popular",
    image: "https://th.bing.com/th?id=OIF.YGqydxMRtAvYE%2fKj9T%2fGLw&r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 3,
    name: "Jarrón Cerámico Mate",
    category: "Accesorios",
    price: 34.50,
    tag: "Esencial",
    image: "https://tse4.mm.bing.net/th/id/OIP.O2pQOASZw62RVgBUoqT4vgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 4,
    name: "Organizador de Roble",
    category: "Oficina",
    price: 52.00,
    tag: "Madera",
    image: "https://tse2.mm.bing.net/th/id/OIP.30tIxbe2vRFdIWm1UfczggHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 5,
    name: "Altavoz Bluetooth Textil",
    category: "Audio",
    price: 110.00,
    tag: "Tech",
    image: "https://tse3.mm.bing.net/th/id/OIP.6P5IbtedNLkV1_V-JeRvyAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 6,
    name: "Taza de Cerámica Studio",
    category: "Comedor",
    price: 18.00,
    tag: "Artesanal",
    image: "https://tse2.mm.bing.net/th/id/OIP.oNBVdhRM_QJ6oO_2KSs6ywHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 7,
    name: "Soporte de Auriculares",
    category: "Oficina",
    price: 29.90,
    tag: "Aluminio",
    image: "https://th.bing.com/th/id/OIP.OHarbf36_AYVT2zrQuCrsgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 8,
    name: "Cuaderno de Bocetos Lino",
    category: "Papelería",
    price: 22.00,
    tag: "Clásico",
    image: "https://m.media-amazon.com/images/I/51QrVHT0oQL._AC_.jpg"
  }
];

let cart = [];

const productsGrid = document.getElementById('productsGrid');
const cartCount = document.getElementById('cartCount');
const toastContainer = document.getElementById('toastContainer');

const formatCurrency = (val) => {
  return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(val);
};

function renderProducts() {
  productsGrid.innerHTML = products.map(product => `
    <article class="product-card" data-id="${product.id}">
      <div class="card-media">
        <span class="card-tag">${product.tag}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-info">
          <span class="product-category">${product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">${formatCurrency(product.price)}</p>
        </div>
        <button class="btn-add-cart" onclick="addToCart(${product.id})">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Agregar al carrito
        </button>
      </div>
    </article>
  `).join('');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  cart.push(product);
  updateCartCounter();
  showToast(`"${product.name}" agregado`);
}

function updateCartCounter() {
  cartCount.textContent = cart.length;
  cartCount.classList.remove('bump');
  void cartCount.offsetWidth;
  cartCount.classList.add('bump');
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

document.addEventListener('DOMContentLoaded', renderProducts);