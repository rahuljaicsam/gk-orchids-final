export function renderContact() {
  return `
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form id="contact-form" class="space-y-4">
            <div>
              <label class="block text-gray-700 mb-2" for="name">Name</label>
              <input type="text" id="name" class="w-full px-3 py-2 border rounded-lg" required>
            </div>
            <div>
              <label class="block text-gray-700 mb-2" for="email">Email</label>
              <input type="email" id="email" class="w-full px-3 py-2 border rounded-lg" required>
            </div>
            <div>
              <label class="block text-gray-700 mb-2" for="message">Message</label>
              <textarea id="message" class="w-full px-3 py-2 border rounded-lg" rows="4" required></textarea>
            </div>
            <button type="submit" class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">Send Message</button>
          </form>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
            <div class="space-y-4">
              <p class="flex items-center">
                <span class="material-icons mr-2">location_on</span>
                123 Pharma Street, Mumbai, India
              </p>
              <p class="flex items-center">
                <span class="material-icons mr-2">email</span>
                info@gkorchids.com
              </p>
              <p class="flex items-center">
                <span class="material-icons mr-2">phone</span>
                +91 XXXXXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}