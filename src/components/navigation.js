export function renderNavigation() {
  return `
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <a href="/" class="flex items-center py-4">
                <span class="font-semibold text-gray-500 text-lg">GKOrchids</span>
              </a>
            </div>
          </div>
          <div class="flex items-center space-x-3">
            <a href="/" class="nav-link py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</a>
            <a href="/about" class="nav-link py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
            <a href="/products" class="nav-link py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Products</a>
            <a href="/contact" class="nav-link py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}