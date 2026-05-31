/* ================================================================
   Édubini — Panier global (localStorage), toast, compteur
   ================================================================ */

/* ---- Cart API ---- */
function getCart() {
  try { return JSON.parse(localStorage.getItem('edubini_cart') || '[]'); } catch (e) { return []; }
}

function saveCart(cart) {
  localStorage.setItem('edubini_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, name, price, image, quantity) {
  quantity = parseInt(quantity) || 1;
  var cart = getCart();
  var existing = cart.find(function(item) { return item.id === productId; });
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ id: productId, name: name, price: price, image: image, qty: quantity });
  }
  saveCart(cart);
  showToast('\u2714 Ajout\u00e9 au panier !');
}

function removeFromCart(productId) {
  var cart = getCart().filter(function(item) { return item.id !== productId; });
  saveCart(cart);
  if (window.renderCart) window.renderCart();
}

function updateQuantity(productId, qty) {
  qty = parseInt(qty) || 1;
  if (qty < 1) { removeFromCart(productId); return; }
  var cart = getCart();
  var item = cart.find(function(i) { return i.id === productId; });
  if (item) { item.qty = qty; saveCart(cart); }
  if (window.renderCart) window.renderCart();
}

function clearCart() {
  saveCart([]);
  if (window.renderCart) window.renderCart();
}

function getCartCount() {
  return getCart().reduce(function(sum, item) { return sum + item.qty; }, 0);
}

function getCartTotal() {
  return getCart().reduce(function(sum, item) { return sum + item.price * item.qty; }, 0);
}

/* ---- Cart badge ---- */
function updateCartBadge() {
  var badges = document.querySelectorAll('.cart-count');
  var count = getCartCount();
  badges.forEach(function(el) { el.textContent = count; });
}

/* ---- Toast ---- */
function showToast(msg) {
  var toast = document.getElementById('toast-global');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-global';
    toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(80px);background:#7a9e6d;color:#fff;padding:14px 28px;border-radius:12px;font-weight:600;font-size:14px;font-family:Poppins,sans-serif;opacity:0;transition:opacity .3s,transform .3s;z-index:9999;pointer-events:none';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._hide);
  toast._hide = setTimeout(function() {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(80px)';
  }, 2600);
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', updateCartBadge);

/* ---- Format helpers ---- */
function formatPrice(amount) {
  return amount.toFixed(2).replace('.', ',') + '\u20ac';
}

function getStarsHtml(rating) {
  var s = '';
  for (var i = 1; i <= 5; i++) {
    s += i <= rating ? '\u2605' : '<span>\u2605</span>';
  }
  return s;
}
