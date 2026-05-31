/* ═══════════════════════════════════════════════════════════════════
   CAHIERMAGIK — Panier global (localStorage)
   Fonctions partagées entre toutes les pages
   ═══════════════════════════════════════════════════════════════════ */

/* ---- Panier localStorage ---- */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cahiermagik_cart') || '[]');
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('cahiermagik_cart', JSON.stringify(cart));
}

function addToCart(productId, qty = 1) {
  let cart = getCart();
  const idx = cart.findIndex(item => item.id === productId);
  if (idx > -1) {
    cart[idx].qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart(cart);
  updateCartBadge();
  showToast('Cahier ajouté au panier !');
}

function removeFromCart(productId) {
  let cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  updateCartBadge();
  if (window.location.pathname.includes('cart.html')) renderCartPage();
}

function updateQty(productId, qty) {
  let cart = getCart();
  const idx = cart.findIndex(item => item.id === productId);
  if (idx > -1) {
    if (qty <= 0) {
      cart.splice(idx, 1);
    } else {
      cart[idx].qty = qty;
    }
  }
  saveCart(cart);
  updateCartBadge();
  if (window.location.pathname.includes('cart.html')) renderCartPage();
}

function clearCart() {
  saveCart([]);
  updateCartBadge();
  if (window.location.pathname.includes('cart.html')) renderCartPage();
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

/* ---- Compteur badge ---- */
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'grid' : 'none';
  if (count > 0) {
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
  }
}

/* ---- Toast ---- */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const icons = {
    success: '<svg viewBox="0 0 24 24" fill="none" stroke="#b6d7a8" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>',
    error: '<svg viewBox="0 0 24 24" fill="none" stroke="#f4c2c2" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>'
  };

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = (icons[type] || icons.success) + `<span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

/* ---- Rendu panier page ---- */
function renderCartPage() {
  const cart = getCart();
  const container = document.getElementById('cart-container');
  if (!container) return;

  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="#e0d8ce" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        </svg>
        <h3>Votre panier est vide</h3>
        <p>Découvrez nos produits magiques et remplissez votre panier !</p>
        <a href="collection.html" class="btn btn-primary">Découvrir la boutique</a>
      </div>
    `;
    return;
  }

  const products = typeof STORE_PRODUCTS !== 'undefined' ? STORE_PRODUCTS : [];
  const subtotal = cart.reduce((sum, item) => {
    const p = products.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
  const shipping = subtotal >= 30 ? 0 : 4.90;
  const total = subtotal + shipping;

  let rows = '';
  cart.forEach(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return;
    rows += `
      <tr>
        <td class="cart-item-img">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
          <div>
            <strong>${p.name}</strong>
            <span class="cart-item-price">${p.price.toFixed(2).replace('.', ',')}€</span>
          </div>
        </td>
        <td>
          <div class="qty-control">
            <button onclick="updateQty(${p.id}, ${item.qty - 1})">−</button>
            <span>${item.qty}</span>
            <button onclick="updateQty(${p.id}, ${item.qty + 1})">+</button>
          </div>
        </td>
        <td class="cart-item-total">${(p.price * item.qty).toFixed(2).replace('.', ',')}€</td>
        <td><button class="cart-remove" onclick="removeFromCart(${p.id})">✕</button></td>
      </tr>
    `;
  });

  container.innerHTML = `
    <div class="cart-table-wrap">
      <table class="cart-table">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <div class="cart-summary">
      <div class="cart-summary-row"><span>Sous-total</span><span>${subtotal.toFixed(2).replace('.', ',')}€</span></div>
      <div class="cart-summary-row"><span>Livraison</span><span>${shipping === 0 ? 'Offerte' : shipping.toFixed(2).replace('.', ',') + '€'}</span></div>
      ${subtotal < 30 ? '<div class="cart-summary-note">Profitez de la livraison offerte dès 30€ !</div>' : ''}
      <div class="cart-summary-row cart-summary-total"><span>Total</span><span>${total.toFixed(2).replace('.', ',')}€</span></div>
      <button class="btn btn-primary btn-block" onclick="checkout()">Passer la commande</button>
      <button class="btn btn-outline btn-block btn-sm" style="margin-top:8px" onclick="clearCart()">Vider le panier</button>
      <div class="payment-badges" style="justify-content:center;margin-top:16px">
        <span>Visa</span><span>Mastercard</span><span>PayPal</span><span>CB</span>
      </div>
      <p class="cart-secure"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> Paiement 100% sécurisé</p>
    </div>
  `;
}

/* ---- Checkout simulation ---- */
function checkout() {
  showToast('Commande simulée — Merci de votre confiance !');
  setTimeout(() => clearCart(), 1500);
}

/* ---- Menu mobile ---- */
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }

  /* Marquer le lien actif */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page) a.classList.add('active');
  });

  updateCartBadge();
});
