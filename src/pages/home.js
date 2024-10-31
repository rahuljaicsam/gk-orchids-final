export function renderHome() {
  return `
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-50 to-blue-50 min-h-screen flex items-center">
      <div class="max-w-6xl mx-auto px-4 py-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-4">Advancing Healthcare Through Innovation</h1>
        <p class="text-xl text-gray-600 mb-8">Leading pharmaceutical solutions for a healthier tomorrow with cutting-edge research and development</p>
        <div class="flex gap-4">
          <a href="/contact" class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">Get in Touch</a>
          <a href="#innovations" class="border border-green-500 text-green-500 px-6 py-3 rounded-lg hover:bg-green-50 transition duration-300">Our Innovations</a>
        </div>
      </div>
    </section>

    <!-- Key Statistics -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="p-6">
            <div class="text-4xl font-bold text-green-500 mb-2">20+</div>
            <div class="text-gray-600">Years Experience</div>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-green-500 mb-2">50+</div>
            <div class="text-gray-600">Products</div>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-green-500 mb-2">100+</div>
            <div class="text-gray-600">Research Papers</div>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-green-500 mb-2">30+</div>
            <div class="text-gray-600">Countries Served</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Innovation Section -->
    <section id="innovations" class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">Our Innovations</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-green-500 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">R&D Excellence</h3>
            <p class="text-gray-600">State-of-the-art research facilities developing breakthrough medications</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-green-500 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Biotech Solutions</h3>
            <p class="text-gray-600">Advanced biotechnology research for next-generation treatments</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-green-500 mb-4">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Quality Assurance</h3>
            <p class="text-gray-600">Rigorous testing and quality control processes</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News & Insights -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">Latest News & Insights</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="border rounded-lg overflow-hidden">
            <img src="https://placehold.co/600x400/e5e7eb/1f2937" alt="Research" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Latest Research Breakthrough</h3>
              <p class="text-gray-600 mb-4">Our team has made significant progress in developing new treatment methods...</p>
              <a href="#" class="text-green-500 hover:text-green-600">Read More →</a>
            </div>
          </div>
          <div class="border rounded-lg overflow-hidden">
            <img src="https://placehold.co/600x400/e5e7eb/1f2937" alt="Innovation" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Industry Recognition</h3>
              <p class="text-gray-600 mb-4">GKOrchids receives prestigious industry award for innovation...</p>
              <a href="#" class="text-green-500 hover:text-green-600">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-green-500 text-white">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Transform Healthcare?</h2>
        <p class="mb-8">Join us in our mission to improve global health through innovation</p>
        <a href="/contact" class="bg-white text-green-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300">Contact Us Today</a>
      </div>
    </section>
  `;
}