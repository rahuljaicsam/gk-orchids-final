export function renderProducts(products) {
  const productCards = products.map(product => `
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
      <p class="text-gray-600 mb-2">${product.description}</p>
      <span class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">${product.category}</span>
    </div>
  `).join('');

  return `
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Our Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${productCards}
        </div>
      </div>
    </section>
  `;
}