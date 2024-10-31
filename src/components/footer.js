export function renderFooter() {
  return `
    <footer class="bg-gray-800 text-white py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">GKOrchids</h3>
            <p class="text-gray-400 mb-4">Excellence in pharmaceuticals</p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="/about" class="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/products" class="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Research</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="/contact" class="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white">Research Papers</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Clinical Trials</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Publications</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Annual Reports</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-center">
                <span class="material-icons mr-2">location_on</span>
                123 Pharma Street, Mumbai, India
              </li>
              <li class="flex items-center">
                <span class="material-icons mr-2">email</span>
                info@gkorchids.com
              </li>
              <li class="flex items-center">
                <span class="material-icons mr-2">phone</span>
                +91 XXXXXXXXXX
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-gray-700">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="text-gray-400">
              <p>&copy; ${new Date().getFullYear()} GKOrchids. All rights reserved.</p>
            </div>
            <div class="flex space-x-4 md:justify-end">
              <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" class="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" class="text-gray-400 hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}