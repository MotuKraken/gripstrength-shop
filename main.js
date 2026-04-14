function moneyChf(value) {
  return new Intl.NumberFormat('de-CH', { style: 'currency', currency: 'CHF', maximumFractionDigits: 0 }).format(value);
}

function renderProducts() {
  const root = document.querySelector('[data-products]');
  if (!root || !window.SHOP_CATALOG) return;
  root.innerHTML = window.SHOP_CATALOG.products.map((product, index) => `
    <article class="product-card card">
      <div class="product-badge">${product.badge}</div>
      <h3>${product.title}</h3>
      <p class="product-subtitle">${product.subtitle}</p>
      <p>${product.description}</p>
      <ul class="micro-list">
        <li>${product.category}</li>
        <li>${product.audience}</li>
      </ul>
      <div class="price-row"><strong>${moneyChf(product.priceChf)}</strong><span>${product.included[0]}</span></div>
      <a class="btn ${index === 0 ? 'btn-primary' : 'btn-secondary'} btn-block" href="${product.mockCheckoutUrl}">${product.ctaLabel}</a>
    </article>
  `).join('');
}

function renderBundles() {
  const root = document.querySelector('[data-bundles]');
  if (!root || !window.SHOP_CATALOG) return;
  root.innerHTML = window.SHOP_CATALOG.bundles.map((bundle) => `
    <article class="card bundle ${bundle.featured ? 'featured' : ''}">
      <span class="tier">${bundle.tier}</span>
      <h3>${bundle.title}</h3>
      <p>${bundle.description}</p>
      <strong>${moneyChf(bundle.priceChf)}</strong>
      <a class="btn ${bundle.featured ? 'btn-primary' : 'btn-secondary'} btn-block" href="#contact">${bundle.ctaLabel}</a>
    </article>
  `).join('');
}

function renderStatus() {
  const node = document.querySelector('[data-shop-status]');
  if (!node || !window.SHOP_CONFIG) return;
  const mode = window.SHOP_CONFIG.shopify.enabled ? 'Shopify connected' : 'Mock catalog / Shopify wiring pending';
  node.textContent = mode;
}

function renderUrls() {
  const preferred = document.querySelector('[data-preferred-url]');
  const fallback = document.querySelector('[data-fallback-url]');
  if (preferred) preferred.textContent = window.SHOP_CONFIG.urls.preferredLiveUrl;
  if (fallback) fallback.textContent = window.SHOP_CONFIG.urls.fallbackLiveUrl;
}

function init() {
  renderProducts();
  renderBundles();
  renderStatus();
  renderUrls();
}

document.addEventListener('DOMContentLoaded', init);
